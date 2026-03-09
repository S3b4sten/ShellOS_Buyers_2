import { GoogleGenAI, Type } from "@google/genai";
import { Product } from "../types";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

export interface AiSearchResponse {
  advice: string;
  recommendedProductIds: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export const chatWithAssistant = async (history: ChatMessage[], availableProducts: Product[]): Promise<AiSearchResponse> => {
  if (!apiKey) {
    return {
      advice: "Mode démonstration : Clé API non configurée. Veuillez ajouter votre clé API pour activer l'assistant intelligent.",
      recommendedProductIds: []
    };
  }

  try {
    const ai = new GoogleGenAI({ apiKey });

    // Create a context-aware prompt with our product catalog
    const productList = availableProducts.map(p => `- ${p.name} (ID: ${p.id}, Catégorie: ${p.category}, Prix: ${p.price}€, Description: ${p.description})`).join('\n');

    const systemInstruction = `
      Tu es un assistant shopping expert pour "SHELLOS".
      Tu dois discuter avec le client comme un vendeur en magasin, comprendre ses besoins et lui proposer des articles du catalogue.
      Tu as une excellente mémoire de la conversation.
      
      CATALOGUE:
      ${productList}
      

      TACHE:
      1. Réponds au client de manière naturelle, élégante et professionnelle.
      2. Si tu as assez d'informations, recommande des produits pertinents du catalogue (maximum 4).
      3. Si le client montre de l'intérêt pour un article spécifique ou pose des questions dessus, donne-lui beaucoup plus de détails sur cet article (matière, style, occasions de le porter, conseils d'entretien, etc.) pour le convaincre, et propose éventuellement des articles complémentaires.
      4. Si tu as besoin de plus de détails, pose des questions pour affiner la recherche.
      5. IMPORTANT: La longueur de ta réponse doit être proportionnelle à la précision de la demande de l'utilisateur. Si l'utilisateur fait une demande courte et simple (ex: "je cherche un t-shirt"), réponds de manière courte et directe. S'il fait une demande longue et détaillée, réponds avec plus de détails.
    `;

    const contents = history.map(msg => ({
      role: msg.role,
      parts: [{ text: msg.text }]
    }));

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: contents,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            advice: {
              type: Type.STRING,
              description: "Ta réponse au client."
            },
            recommendedProductIds: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "La liste des IDs exacts des produits recommandés (vide si aucune recommandation pour le moment)."
            }
          }
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as AiSearchResponse;
    }

    return { advice: "Je n'ai pas pu trouver de produits correspondants.", recommendedProductIds: [] };

  } catch (error) {
    const errMsg = error instanceof Error ? error.message : String(error);
    console.error("Gemini API Error:", errMsg);
    return {
      advice: `Erreur API: ${errMsg}`,
      recommendedProductIds: []
    };
  }
};