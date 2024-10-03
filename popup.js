const translations = {
    "hello": {
        "es": "hola",
        "fr": "bonjour",
        "de": "hallo",
        "af": "Chan xa wil",
        "ar": "هتاف للترحيب",
        "dh": "އައްސަލާމް ޢަލައިކުމް",
        "it": "Ciao",
        "jp": "こんにちは",
        "ru": "привет"
    },
    "how are you?": {
        "es": "¿cómo estás?",
        "fr": "comment ça va?",
        "de": "wie geht's?",
        "af": "hoe gaan dit met jou?",
        "ar": "كيف حالك؟",
        "dh": "ހާލު ކިހިނެތް؟",
        "it": "Come stai?",
        "jp": "元気ですか？",
        "ru": "Как вы?"
    },

    "thank you": {
        "es": "gracias",
        "fr": "merci",
        "de": "danke",
        "af": "dankie",
        "ar": "شكرًا لك",
        "dh": "ޝުކުރިއްޔާ",
        "it": "Grazie",
        "jp": "ありがとう",
        "ru": "Спасибо"


    },
    "what to do": {
        "es": "Qué hacer",
        "fr": "ce qu'il faut faire",
        "de": "was zu tun",
        "af": "wat om te doen",
        "ar": "ما يجب القيام به",
        "dh": "ކީއްކުރާނީ",
        "it": "cosa fare",
        "jp": "何をするか",
        "ru": "что делать"
    },


    // Add more translations as needed
};

document.getElementById('translateBtn').addEventListener('click', () => {
  const inputText = document.getElementById('inputText').value.trim().toLowerCase();  // Convert to lowercase
  const selectedLanguage = document.getElementById('languageSelect').value;

  // Add the check here for translation
  if (translations[inputText]) {
    const translatedText = translations[inputText][selectedLanguage];
    if (translatedText) {
      console.log("Translation found:", translatedText);
      document.getElementById('outputText').innerText = translatedText; // Display translation in the UI
    } else {
      console.error("No translation found for the selected language.");
      document.getElementById('outputText').innerText = "Translation not available for the selected language.";
    }
  } else {
    console.error("No translation found for the entered text.");
    document.getElementById('outputText').innerText = "Translation not found.";
  }
});

