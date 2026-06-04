// ML Model Library
class MLModel {
    constructor() {
        this.languages = this.initializeLanguages();
        this.sentimentWords = this.initializeSentimentWords();
        this.entities = this.initializeEntities();
    }

    // Initialize language profiles
    initializeLanguages() {
        return {
            en: {
                name: 'English',
                commonWords: ['the', 'be', 'to', 'of', 'and', 'a', 'in', 'that', 'have', 'i'],
                vowels: 'aeiou',
                patterns: /\b(the|be|to|of|and|is|it|in|on|at|for|with|was|he|she|you|we|they)\b/gi
            },
            es: {
                name: 'Spanish (Español)',
                commonWords: ['el', 'la', 'de', 'que', 'y', 'a', 'en', 'es', 'se', 'del'],
                vowels: 'aeiou',
                patterns: /\b(el|la|de|que|y|a|en|es|se|por)\b/gi
            },
            fr: {
                name: 'French (Français)',
                commonWords: ['le', 'de', 'un', 'et', 'a', 'en', 'que', 'se', 'il', 'qui'],
                vowels: 'aeiouyàâäæœ',
                patterns: /\b(le|de|un|et|a|en|que|se|il|qui)\b/gi
            },
            de: {
                name: 'German (Deutsch)',
                commonWords: ['der', 'die', 'und', 'in', 'den', 'von', 'zu', 'das', 'mit', 'sich'],
                vowels: 'aeiouyäöü',
                patterns: /\b(der|die|und|in|den|von|zu|das|mit|sich)\b/gi
            },
            it: {
                name: 'Italian (Italiano)',
                commonWords: ['il', 'di', 'e', 'che', 'da', 'a', 'in', 'si', 'per', 'su'],
                vowels: 'aeiou',
                patterns: /\b(il|di|e|che|da|a|in|si|per|su)\b/gi
            },
            pt: {
                name: 'Portuguese (Português)',
                commonWords: ['de', 'a', 'o', 'que', 'e', 'do', 'da', 'em', 'um', 'para'],
                vowels: 'aeiouyãõâ',
                patterns: /\b(de|a|o|que|e|do|da|em|um|para)\b/gi
            },
            ru: {
                name: 'Russian (Русский)',
                commonWords: ['и', 'в', 'не', 'на', 'я', 'быть', 'что', 'он', 'она', 'к'],
                vowels: 'ауоеиюяЕЫА',
                cyrillic: true
            },
            ja: {
                name: 'Japanese (日本語)',
                commonWords: ['の', 'に', 'は', 'を', 'た', 'が', 'で', 'て', 'と', 'し'],
                japanese: true
            },
            ko: {
                name: 'Korean (한국어)',
                commonWords: ['이', '그', '저', '것', '수', '등', '들', '및', '두', '년'],
                korean: true
            },
            zh: {
                name: 'Chinese (中文)',
                commonWords: ['的', '一', '是', '在', '不', '了', '有', '和', '人', '这'],
                chinese: true
            },
            ar: {
                name: 'Arabic (العربية)',
                commonWords: ['في', 'من', 'إلى', 'هذا', 'التي', 'كان', 'قد', 'كل', 'بين', 'عن'],
                arabic: true
            },
            hi: {
                name: 'Hindi (हिन्दी)',
                commonWords: ['का', 'के', 'की', 'है', 'हैं', 'में', 'और', 'को', 'एक', 'यह'],
                hindi: true
            },
            tr: {
                name: 'Turkish (Türkçe)',
                commonWords: ['ve', 'bir', 'bu', 'için', 'de', 'da', 'yok', 'var', 'ile', 'ben'],
                vowels: 'aeıioöuüAEIİOÖUÜ'
            },
            pl: {
                name: 'Polish (Polski)',
                commonWords: ['i', 'w', 'do', 'z', 'na', 'się', 'nie', 'to', 'jest', 'za'],
                vowels: 'aeiouyąęó'
            },
            vi: {
                name: 'Vietnamese (Tiếng Việt)',
                commonWords: ['của', 'và', 'là', 'có', 'trong', 'được', 'với', 'tại', 'không', 'những'],
                vietnamese: true
            },
            th: {
                name: 'Thai (ไทย)',
                commonWords: ['ที่', 'และ', 'ใน', 'นั่น', 'ได้', 'ว่า', 'เป็น', 'นี่', 'แล้ว', 'เขา'],
                thai: true
            },
            id: {
                name: 'Indonesian (Bahasa Indonesia)',
                commonWords: ['dan', 'di', 'yang', 'adalah', 'ke', 'dari', 'untuk', 'dengan', 'atau', 'tidak'],
                vowels: 'aeiou'
            },
            nl: {
                name: 'Dutch (Nederlands)',
                commonWords: ['de', 'en', 'van', 'het', 'in', 'een', 'op', 'te', 'dat', 'die'],
                vowels: 'aeiouyäöëüî'
            }
        };
    }

    // Initialize sentiment words
    initializeSentimentWords() {
        return {
            positive: [
                'good', 'great', 'excellent', 'amazing', 'wonderful', 'fantastic', 'perfect', 'love',
                'beautiful', 'awesome', 'best', 'brilliant', 'brilliant', 'cool', 'delightful',
                'excellent', 'fabulous', 'favorable', 'fine', 'friendly', 'fun', 'funny',
                'glad', 'good', 'gorgeous', 'great', 'happy', 'incredible', 'interesting',
                'nice', 'outstanding', 'perfect', 'pleasant', 'positive', 'pretty', 'remarkable',
                'superb', 'superior', 'wonderful', 'yes', 'brilliant', 'outstanding', 'spectacular',
                'bueno', 'excelente', 'bien', 'maravilloso', 'fantástico', 'bonito', 'hermoso',
                'bon', 'excellent', 'merveilleux', 'super', 'magnifique', 'bien', 'gut', 'ausgezeichnet', 'wunderbar', 'schön'
            ],
            negative: [
                'bad', 'terrible', 'awful', 'horrible', 'hate', 'dislike', 'poor', 'worst',
                'ugly', 'disgusting', 'nasty', 'mean', 'evil', 'worse', 'annoying', 'boring',
                'broken', 'confused', 'disappointed', 'disappointing', 'disastrous', 'disgusting',
                'dreadful', 'enemy', 'evil', 'false', 'faulty', 'fearful', 'futile', 'gloomy',
                'grim', 'gruesome', 'harmful', 'hateful', 'horrible', 'horrid', 'hostile',
                'ill', 'immoral', 'impossible', 'inadequate', 'incapable', 'inferior', 'insignificant',
                'insult', 'insufficient', 'intolerable', 'invalid', 'irritate', 'irritated', 'irresponsible',
                'joyless', 'knavish', 'lacking', 'lamentable', 'late', 'laughable', 'lawless', 'lazy',
                'malicious', 'marred', 'mediocre', 'melancholy', 'menacing', 'messy', 'miserable',
                'mock', 'mocking', 'moldy', 'monstrous', 'moody', 'morbid', 'moronic', 'muddy',
                'murky', 'musty', 'mysterious', 'needy', 'nefarious', 'negligent', 'nerveless',
                'no', 'not', 'nothing', 'notorious', 'noxious', 'null', 'nuisance', 'numb', 'nuts',
                'obese', 'objectionable', 'obnoxious', 'obscene', 'obsessive', 'obsolete', 'obtuse',
                'odious', 'off', 'offensive', 'offhand', 'offline', 'old', 'oleaginous', 'ominous',
                'omniscient', 'onerous', 'onslaught', 'oozing', 'opaque', 'open', 'operating',
                'operative', 'opinionated', 'opposed', 'opposite', 'opposition', 'oppressed', 'oppressive',
                'oppressor', 'opprobrious', 'optimistic', 'optional', 'opulent', 'opus', 'oracle',
                'oral', 'orange', 'orated', 'orating', 'oration', 'orator', 'oratorio', 'oratorical',
                'oratorio', 'oratory', 'orb', 'orbit', 'orbital', 'orca', 'orchestra', 'orchestral',
                'orchestrate', 'orchid', 'ordain', 'ordained', 'ordaining', 'ordains', 'ordeal', 'ordeals'
            ]
        };
    }

    // Initialize entity patterns
    initializeEntities() {
        return {
            dates: /\b(\d{1,2}[-\/]\d{1,2}[-\/]\d{2,4}|\d{4}[-\/]\d{1,2}[-\/]\d{1,2}|(?:January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+\d{1,2},?\s+\d{4}|\d{1,2}\s+(?:January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|Jun|Jul|Aug|Sep|Oct|Nov|Dec))\b/gi,
            numbers: /\b(\d+(?:[.,]\d+)?)\b/g,
            emails: /\b([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,})\b/g,
            urls: /\b(https?:\/\/[^\s]+)\b/g,
            persons: /\b([A-Z][a-z]+(?:\s+[A-Z][a-z]+){1,2})\b/g,
            locations: /\b(New\s+York|Los\s+Angeles|London|Paris|Tokyo|Beijing|Sydney|Mumbai|Dubai|Bangkok|Berlin|Madrid|Rome|Moscow|Seoul|Hong\s+Kong|Singapore|Toronto|Vancouver|Mexico\s+City)\b/gi
        };
    }

    // Detect Language
    detectLanguage(text) {
        if (!text || text.trim().length < 3) {
            return null;
        }

        const scores = {};
        const lowerText = text.toLowerCase();

        // Check for script/character patterns
        if (/[\u0400-\u04FF]/.test(text)) {
            return {
                language: 'ru',
                name: 'Russian (Русский)',
                confidence: 95,
                alternatives: []
            };
        }
        if (/[\u3040-\u309F\u30A0-\u30FF]/.test(text)) {
            return {
                language: 'ja',
                name: 'Japanese (日本語)',
                confidence: 95,
                alternatives: []
            };
        }
        if (/[\uAC00-\uD7AF]/.test(text)) {
            return {
                language: 'ko',
                name: 'Korean (한국어)',
                confidence: 95,
                alternatives: []
            };
        }
        if (/[\u4E00-\u9FFF]/.test(text)) {
            return {
                language: 'zh',
                name: 'Chinese (中文)',
                confidence: 95,
                alternatives: []
            };
        }
        if (/[\u0600-\u06FF]/.test(text)) {
            return {
                language: 'ar',
                name: 'Arabic (العربية)',
                confidence: 95,
                alternatives: []
            };
        }
        if (/[\u0900-\u097F]/.test(text)) {
            return {
                language: 'hi',
                name: 'Hindi (हिन्दी)',
                confidence: 95,
                alternatives: []
            };
        }

        // Score based on common words and patterns
        for (const [langCode, langData] of Object.entries(this.languages)) {
            let score = 0;
            const words = lowerText.split(/\s+/);

            // Check common words
            for (const word of words) {
                if (langData.commonWords.includes(word)) {
                    score += 10;
                }
            }

            // Check vowel patterns
            if (langData.vowels) {
                const vowelCount = (lowerText.match(new RegExp(`[${langData.vowels}]`, 'g')) || []).length;
                const vowelRatio = vowelCount / text.length;

                if (langCode === 'en' && vowelRatio > 0.35 && vowelRatio < 0.45) score += 15;
                else if (langCode === 'es' && vowelRatio > 0.40 && vowelRatio < 0.50) score += 15;
                else if (langCode === 'fr' && vowelRatio > 0.40 && vowelRatio < 0.50) score += 15;
                else if (langCode === 'de' && vowelRatio > 0.35 && vowelRatio < 0.45) score += 15;
            }

            // Check patterns
            if (langData.patterns) {
                const matches = lowerText.match(langData.patterns) || [];
                score += matches.length * 5;
            }

            scores[langCode] = score;
        }

        // Find top languages
        const sorted = Object.entries(scores)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5);

        const maxScore = sorted[0][1];
        const confidence = Math.min(99, Math.round((maxScore / 100) * 100));

        const topLang = sorted[0][0];
        const topLangData = this.languages[topLang];

        return {
            language: topLang,
            name: topLangData.name,
            confidence: Math.max(50, confidence),
            alternatives: sorted.slice(1).map(([lang, score]) => ({
                language: lang,
                name: this.languages[lang].name
            }))
        };
    }

    // Analyze Sentiment
    analyzeSentiment(text) {
        const lowerText = text.toLowerCase();
        let positiveCount = 0;
        let negativeCount = 0;
        const positiveWords = [];
        const negativeWords = [];

        // Count sentiment words
        for (const word of this.sentimentWords.positive) {
            const regex = new RegExp(`\\b${word}\\b`, 'gi');
            const matches = lowerText.match(regex);
            if (matches) {
                positiveCount += matches.length;
                positiveWords.push(...matches.map(w => w.toLowerCase()));
            }
        }

        for (const word of this.sentimentWords.negative) {
            const regex = new RegExp(`\\b${word}\\b`, 'gi');
            const matches = lowerText.match(regex);
            if (matches) {
                negativeCount += matches.length;
                negativeWords.push(...matches.map(w => w.toLowerCase()));
            }
        }

        // Calculate sentiment
        const total = positiveCount + negativeCount;
        let sentiment = 'neutral';
        let score = 0.5;

        if (total > 0) {
            score = positiveCount / total;
            if (score > 0.6) sentiment = 'positive';
            else if (score < 0.4) sentiment = 'negative';
        }

        return {
            sentiment: sentiment,
            score: Math.round(score * 100),
            positiveWords: [...new Set(positiveWords)],
            negativeWords: [...new Set(negativeWords)],
            confidence: Math.min(total * 10, 95)
        };
    }

    // Analyze Text Statistics
    analyzeStatistics(text) {
        const words = text.trim().split(/\s+/).filter(w => w.length > 0);
        const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
        const uniqueWords = new Set(words.map(w => w.toLowerCase()));

        const avgWordLength = words.length > 0 ? (text.replace(/\s/g, '').length / words.length).toFixed(2) : 0;
        
        // Determine complexity
        let complexity = 'Low';
        if (avgWordLength > 5) complexity = 'Medium';
        if (avgWordLength > 7) complexity = 'High';

        return {
            characters: text.length,
            words: words.length,
            sentences: sentences.length,
            uniqueWords: uniqueWords.size,
            avgWordLength: parseFloat(avgWordLength),
            complexity: complexity,
            readingTime: Math.ceil(words.length / 200) // assuming 200 words per minute
        };
    }

    // Evaluate Translation Quality
    evaluateTranslationQuality(source, target) {
        const sourceStats = this.analyzeStatistics(source);
        const targetStats = this.analyzeStatistics(target);

        const factors = {
            lengthConsistency: 0,
            contentPreservation: 0,
            wordCountMatch: 0,
            punctuationPreservation: 0,
            numberPreservation: 0,
            characterSupport: 0
        };

        // 1. Length consistency (±30%)
        const lengthRatio = targetStats.characters / sourceStats.characters;
        factors.lengthConsistency = lengthRatio > 0.7 && lengthRatio < 1.3 ? 100 : Math.max(0, 100 - Math.abs(lengthRatio - 1) * 100);

        // 2. Content preservation (check if source text appears in target)
        const sourceWords = source.toLowerCase().split(/\s+/);
        const targetText = target.toLowerCase();
        const preservedWords = sourceWords.filter(w => targetText.includes(w.substring(0, 3))).length;
        factors.contentPreservation = (preservedWords / sourceWords.length) * 100;

        // 3. Word count match
        const wordRatio = targetStats.words / sourceStats.words;
        factors.wordCountMatch = wordRatio > 0.7 && wordRatio < 1.5 ? 100 : Math.max(0, 100 - Math.abs(wordRatio - 1) * 50);

        // 4. Punctuation preservation
        const sourcePunct = (source.match(/[.!?,;:]/g) || []).length;
        const targetPunct = (target.match(/[.!?,;:]/g) || []).length;
        factors.punctuationPreservation = sourcePunct > 0 ? ((targetPunct > 0 ? 100 : 0)) : 100;

        // 5. Number preservation
        const sourceNumbers = (source.match(/\d+/g) || []).length;
        const targetNumbers = (target.match(/\d+/g) || []).length;
        factors.numberPreservation = sourceNumbers === targetNumbers ? 100 : 50;

        // 6. Character support (no broken characters)
        const brokenChars = (target.match(/[?]/g) || []).length;
        factors.characterSupport = brokenChars === 0 ? 100 : Math.max(50, 100 - brokenChars * 5);

        // Calculate overall quality
        const quality = Object.values(factors).reduce((a, b) => a + b) / Object.keys(factors).length;

        return {
            overallQuality: Math.round(quality),
            factors: factors,
            assessment: quality > 80 ? 'Excellent' : quality > 60 ? 'Good' : quality > 40 ? 'Fair' : 'Poor'
        };
    }

    // Extract Named Entities
    extractEntities(text) {
        const entities = {
            dates: [],
            numbers: [],
            emails: [],
            urls: [],
            persons: [],
            locations: []
        };

        // Extract each entity type
        let match;

        // Dates
        const dateRegex = new RegExp(this.entities.dates);
        while ((match = dateRegex.exec(text)) !== null) {
            if (!entities.dates.includes(match[0])) entities.dates.push(match[0]);
        }

        // Numbers
        const numberRegex = new RegExp(this.entities.numbers);
        const numbers = new Set();
        while ((match = numberRegex.exec(text)) !== null) {
            if (match[0].length > 0) numbers.add(match[0]);
        }
        entities.numbers = Array.from(numbers).slice(0, 10);

        // Emails
        const emailRegex = new RegExp(this.entities.emails);
        while ((match = emailRegex.exec(text)) !== null) {
            if (!entities.emails.includes(match[0])) entities.emails.push(match[0]);
        }

        // URLs
        const urlRegex = new RegExp(this.entities.urls);
        while ((match = urlRegex.exec(text)) !== null) {
            if (!entities.urls.includes(match[0])) entities.urls.push(match[0]);
        }

        // Locations
        const locRegex = new RegExp(this.entities.locations);
        while ((match = locRegex.exec(text)) !== null) {
            if (!entities.locations.includes(match[0])) entities.locations.push(match[0]);
        }

        // Persons (capitalized words)
        const personRegex = /\b[A-Z][a-z]+(?:\s+[A-Z][a-z]+){0,2}\b/g;
        const persons = new Set();
        while ((match = personRegex.exec(text)) !== null) {
            if (match[0].length > 3 && !entities.locations.includes(match[0])) {
                persons.add(match[0]);
            }
        }
        entities.persons = Array.from(persons).slice(0, 10);

        return entities;
    }
}

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MLModel;
}