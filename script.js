// AI Models Data
const aiModels = [
  {
    name: "GPT-3",
    category: "NLP",
    description: "A state-of-the-art language model for text generation, translation, and summarization.",
    performance: "Text generation, chatbot development, language understanding.",
    link: "https://beta.openai.com/"
  },
  {
    name: "BERT",
    category: "NLP",
    description: "A transformer-based model for understanding the context of words in a sentence.",
    performance: "Text classification, question answering, sentiment analysis.",
    link: "https://github.com/google-research/bert"
  },
  {
    name: "ResNet",
    category: "Computer Vision",
    description: "A deep residual network for image classification and object detection.",
    performance: "Image classification, object detection.",
    link: "https://github.com/KaimingHe/deep-residual-networks"
  },
  {
    name: "YOLO",
    category: "Computer Vision",
    description: "Real-time object detection system that can predict bounding boxes and class labels.",
    performance: "Object detection in real-time applications.",
    link: "https://github.com/AlexeyAB/darknet"
  },
  {
    name: "OpenAI Codex",
    category: "Programming Assistance",
    description: "Powers GitHub Copilot for AI-powered coding assistance.",
    performance: "Code completion, programming support.",
    link: "https://openai.com/blog/openai-codex"
  },
  {
    name: "DALL·E",
    category: "Generative Models",
    description: "Generates images from textual descriptions.",
    performance: "Text-to-image generation, creative content creation.",
    link: "https://openai.com/dall-e"
  },
  {
    name: "Wav2Vec 2.0",
    category: "Speech Recognition",
    description: "Self-supervised learning model for speech recognition.",
    performance: "Speech-to-text, real-time transcription.",
    link: "https://huggingface.co/facebook/wav2vec2-large-xlsr-53"
  }
];

// Populate AI Models
const aiModelsContainer = document.getElementById('aiModels');

// Function to display AI Models
function displayModels(models) {
  aiModelsContainer.innerHTML = '';
  models.forEach(model => {
    const modelCard = `
      <div class="ai-card">
        <h3>${model.name}</h3>
        <p><strong>Category:</strong> ${model.category}</p>
        <p><strong>Description:</strong> ${model.description}</p>
        <p><strong>Performance/Use Case:</strong> ${model.performance}</p>
        <a href="${model.link}" target="_blank">Learn More</a>
      </div>
    `;
    aiModelsContainer.innerHTML += modelCard;
  });
}

// Function to filter models based on search
function filterModels() {
  const query = document.getElementById('searchBar').value.toLowerCase();
  const filteredModels = aiModels.filter(model => {
    return model.name.toLowerCase().includes(query) || model.category.toLowerCase().includes(query);
  });
  displayModels(filteredModels);
}

// Initially display all models
displayModels(aiModels);
