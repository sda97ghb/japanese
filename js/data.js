const EXERCISES = [
    {
        "id": 1,
        "name": "Hiragana (vowels) → Romanization",
        "type": "cards",
        "shuffleFirstTime": false,
        "shuffleOtherTimes": true,
        "wordLanguage": "japanese",
        "translationLanguage": "roman",
        "cards": [
            {"word": "あ", "translation": "a [a]",},
            {"word": "い", "translation": "i [i]",},
            {"word": "う", "translation": "u [ɯ]",},
            {"word": "え", "translation": "e [e]",},
            {"word": "お", "translation": "o [o]",},
            {"word": "や", "translation": "ya [ja]",},
            {"word": "ゆ", "translation": "yu [jɯ]",},
            {"word": "よ", "translation": "yo [jo]",},
        ],
    },
    {
        "id": 2,
        "name": "Hiragana (K) → Romanization",
        "type": "cards",
        "shuffleFirstTime": false,
        "shuffleOtherTimes": true,
        "wordLanguage": "japanese",
        "translationLanguage": "roman",
        "cards": [
            {"word": "か", "translation": "ka [ka]",},
            {"word": "き", "translation": "ki [ki]",},
            {"word": "く", "translation": "ku [kɯ]",},
            {"word": "け", "translation": "ke [ke]",},
            {"word": "こ", "translation": "ko [ko]",},
            {"word": "きゃ", "translation": "kya [kʲa]",},
            {"word": "きゅ", "translation": "kyu [kʲɯ]",},
            {"word": "きょ", "translation": "kyo [kʲo]",},
        ],
    },
    {
        "id": 3,
        "name": "Hiragana (S) → Romanization",
        "type": "cards",
        "shuffleFirstTime": false,
        "shuffleOtherTimes": true,
        "wordLanguage": "japanese",
        "translationLanguage": "roman",
        "cards": [
            {"word": "さ", "translation": "sa [sa]",},
            {"word": "し", "translation": "shi [ɕi]",},
            {"word": "す", "translation": "su [sɯ]",},
            {"word": "せ", "translation": "se [se]",},
            {"word": "そ", "translation": "so [so]",},
            {"word": "しゃ", "translation": "sha [ɕa]",},
            {"word": "しゅ", "translation": "shu [ɕɯ]",},
            {"word": "しょ", "translation": "sho [ɕo]",},
        ],
    },
    {
        "id": 4,
        "name": "Hiragana (T) → Romanization",
        "type": "cards",
        "shuffleFirstTime": false,
        "shuffleOtherTimes": true,
        "wordLanguage": "japanese",
        "translationLanguage": "roman",
        "cards": [
            {"word": "た", "translation": "ta [ta]",},
            {"word": "ち", "translation": "chi [tɕi]",},
            {"word": "つ", "translation": "tsu [tsɯ]",},
            {"word": "て", "translation": "te [te]",},
            {"word": "と", "translation": "to [to]",},
            {"word": "ちゃ", "translation": "cha [tɕa]",},
            {"word": "ちゅ", "translation": "chu [tɕɯ]",},
            {"word": "ちょ", "translation": "cho [tɕo]",},
        ],
    },
    {
        "id": 5,
        "name": "Hiragana (N) → Romanization",
        "type": "cards",
        "shuffleFirstTime": false,
        "shuffleOtherTimes": true,
        "wordLanguage": "japanese",
        "translationLanguage": "roman",
        "cards": [
            {"word": "な", "translation": "na [na]",},
            {"word": "に", "translation": "ni [ɲi]",},
            {"word": "ぬ", "translation": "nu [nɯ]",},
            {"word": "ね", "translation": "ne [ne]",},
            {"word": "の", "translation": "no [no]",},
            {"word": "にゃ", "translation": "nya [ɲa]",},
            {"word": "にゅ", "translation": "nyu [ɲɯ]",},
            {"word": "にょ", "translation": "nyo [ɲo]",},
        ],
    },
    {
        "id": 6,
        "name": "Hiragana (H) → Romanization",
        "type": "cards",
        "shuffleFirstTime": false,
        "shuffleOtherTimes": true,
        "wordLanguage": "japanese",
        "translationLanguage": "roman",
        "cards": [
            {"word": "は", "translation": "ha [ha] ([ɰa] as particle)",},
            {"word": "ひ", "translation": "hi [çi]",},
            {"word": "ふ", "translation": "fu [ɸɯ]",},
            {"word": "へ", "translation": "he [he] ([e] as particle)",},
            {"word": "ほ", "translation": "ho [ho]",},
            {"word": "ひゃ", "translation": "hya [ça]",},
            {"word": "ひゅ", "translation": "hyu [çɯ]",},
            {"word": "ひょ", "translation": "hyo [ço]",},
        ],
    },
    {
        "id": 7,
        "name": "Hiragana (M) → Romanization",
        "type": "cards",
        "shuffleFirstTime": false,
        "shuffleOtherTimes": true,
        "wordLanguage": "japanese",
        "translationLanguage": "roman",
        "cards": [
            {"word": "ま", "translation": "ma [ma]",},
            {"word": "み", "translation": "mi [mi]",},
            {"word": "む", "translation": "mu [mɯ]",},
            {"word": "め", "translation": "me [me]",},
            {"word": "も", "translation": "mo [mo]",},
            {"word": "みゃ", "translation": "mya [mʲa]",},
            {"word": "みゅ", "translation": "myu [mʲɯ]",},
            {"word": "みょ", "translation": "myo [mʲo]",},
        ],
    },
    {
        "id": 8,
        "name": "Hiragana (R) → Romanization",
        "type": "cards",
        "shuffleFirstTime": false,
        "shuffleOtherTimes": true,
        "wordLanguage": "japanese",
        "translationLanguage": "roman",
        "cards": [
            {"word": "ら", "translation": "ra [ɾa]",},
            {"word": "り", "translation": "ri [ɾi]",},
            {"word": "る", "translation": "ru [ɾɯ]",},
            {"word": "れ", "translation": "re [ɾe]",},
            {"word": "ろ", "translation": "ro [ɾo]",},
            {"word": "りゃ", "translation": "rya [ɾʲa]",},
            {"word": "りゅ", "translation": "ryu [ɾʲɯ]",},
            {"word": "りょ", "translation": "ryo [ɾʲo]",},
        ],
    },
    {
        "id": 9,
        "name": "Hiragana (W) → Romanization",
        "type": "cards",
        "shuffleFirstTime": false,
        "shuffleOtherTimes": true,
        "wordLanguage": "japanese",
        "translationLanguage": "roman",
        "cards": [
            {"word": "わ", "translation": "wa [ɰa]",},
            {"word": "ゐ", "translation": "wi [i]",},
            {"word": "ゑ", "translation": "we [e]",},
            {"word": "を", "translation": "wo [o]",},
        ],
    },
    {
        "id": 10,
        "name": "Hiragana (without diacritics) → Romanization",
        "type": "cards",
        "shuffleFirstTime": true,
        "shuffleOtherTimes": true,
        "wordLanguage": "japanese",
        "translationLanguage": "roman",
        "cards": [
            {"word": "あ", "translation": "a [a]",},
            {"word": "い", "translation": "i [i]",},
            {"word": "う", "translation": "u [ɯ]",},
            {"word": "え", "translation": "e [e]",},
            {"word": "お", "translation": "o [o]",},
            {"word": "や", "translation": "ya [ja]",},
            {"word": "ゆ", "translation": "yu [jɯ]",},
            {"word": "よ", "translation": "yo [jo]",},
            {"word": "か", "translation": "ka [ka]",},
            {"word": "き", "translation": "ki [ki]",},
            {"word": "く", "translation": "ku [kɯ]",},
            {"word": "け", "translation": "ke [ke]",},
            {"word": "こ", "translation": "ko [ko]",},
            {"word": "きゃ", "translation": "kya [kʲa]",},
            {"word": "きゅ", "translation": "kyu [kʲɯ]",},
            {"word": "きょ", "translation": "kyo [kʲo]",},
            {"word": "さ", "translation": "sa [sa]",},
            {"word": "し", "translation": "shi [ɕi]",},
            {"word": "す", "translation": "su [sɯ]",},
            {"word": "せ", "translation": "se [se]",},
            {"word": "そ", "translation": "so [so]",},
            {"word": "しゃ", "translation": "sha [ɕa]",},
            {"word": "しゅ", "translation": "shu [ɕɯ]",},
            {"word": "しょ", "translation": "sho [ɕo]",},
            {"word": "た", "translation": "ta [ta]",},
            {"word": "ち", "translation": "chi [tɕi]",},
            {"word": "つ", "translation": "tsu [tsɯ]",},
            {"word": "て", "translation": "te [te]",},
            {"word": "と", "translation": "to [to]",},
            {"word": "ちゃ", "translation": "cha [tɕa]",},
            {"word": "ちゅ", "translation": "chu [tɕɯ]",},
            {"word": "ちょ", "translation": "cho [tɕo]",},
            {"word": "な", "translation": "na [na]",},
            {"word": "に", "translation": "ni [ɲi]",},
            {"word": "ぬ", "translation": "nu [nɯ]",},
            {"word": "ね", "translation": "ne [ne]",},
            {"word": "の", "translation": "no [no]",},
            {"word": "にゃ", "translation": "nya [ɲa]",},
            {"word": "にゅ", "translation": "nyu [ɲɯ]",},
            {"word": "にょ", "translation": "nyo [ɲo]",},
            {"word": "は", "translation": "ha [ha] ([ɰa] as particle)",},
            {"word": "ひ", "translation": "hi [çi]",},
            {"word": "ふ", "translation": "fu [ɸɯ]",},
            {"word": "へ", "translation": "he [he] ([e] as particle)",},
            {"word": "ほ", "translation": "ho [ho]",},
            {"word": "ひゃ", "translation": "hya [ça]",},
            {"word": "ひゅ", "translation": "hyu [çɯ]",},
            {"word": "ひょ", "translation": "hyo [ço]",},
            {"word": "ま", "translation": "ma [ma]",},
            {"word": "み", "translation": "mi [mi]",},
            {"word": "む", "translation": "mu [mɯ]",},
            {"word": "め", "translation": "me [me]",},
            {"word": "も", "translation": "mo [mo]",},
            {"word": "みゃ", "translation": "mya [mʲa]",},
            {"word": "みゅ", "translation": "myu [mʲɯ]",},
            {"word": "みょ", "translation": "myo [mʲo]",},
            {"word": "ら", "translation": "ra [ɾa]",},
            {"word": "り", "translation": "ri [ɾi]",},
            {"word": "る", "translation": "ru [ɾɯ]",},
            {"word": "れ", "translation": "re [ɾe]",},
            {"word": "ろ", "translation": "ro [ɾo]",},
            {"word": "りゃ", "translation": "rya [ɾʲa]",},
            {"word": "りゅ", "translation": "ryu [ɾʲɯ]",},
            {"word": "りょ", "translation": "ryo [ɾʲo]",},
            {"word": "わ", "translation": "wa [ɰa]",},
            {"word": "ゐ", "translation": "wi [i]",},
            {"word": "ゑ", "translation": "we [e]",},
            {"word": "を", "translation": "wo [o]",},
        ],
    },
    {
        "id": 11,
        "name": "Hiragana (diacritics) → Romanization",
        "type": "cards",
        "shuffleFirstTime": true,
        "shuffleOtherTimes": true,
        "wordLanguage": "japanese",
        "translationLanguage": "roman",
        "cards": [
            {"word": "が", "translation": "ga [ɡa]",},
            {"word": "ぎ", "translation": "gi [ɡi]",},
            {"word": "ぐ", "translation": "gu [ɡɯ]",},
            {"word": "げ", "translation": "ge [ɡe]",},
            {"word": "ご", "translation": "go [ɡo]",},
            {"word": "ぎゃ", "translation": "gya [ɡʲa]",},
            {"word": "ぎゅ", "translation": "gyu [ɡʲɯ]",},
            {"word": "ぎょ", "translation": "gyo [ɡʲo]",},
            {"word": "ざ", "translation": "za [(d)za]",},
            {"word": "じ", "translation": "ji [(d)ʑi]",},
            {"word": "ず", "translation": "zu [(d)zɯ]",},
            {"word": "ぜ", "translation": "ze [(d)ze]",},
            {"word": "ぞ", "translation": "zo [(d)zo]",},
            {"word": "じゃ", "translation": "ja [(d)ʑa]",},
            {"word": "じゅ", "translation": "ju [(d)ʑɯ]",},
            {"word": "じょ", "translation": "jo [(d)ʑo]",},
            {"word": "だ", "translation": "da [da]",},
            {"word": "ぢ", "translation": "ji, dji, jyi [(d)ʑi]",},
            {"word": "づ", "translation": "dzu, zu [(d)zɯ]",},
            {"word": "で", "translation": "de [de]",},
            {"word": "ど", "translation": "do [do]",},
            {"word": "ぢゃ", "translation": "dja, ja [(d)ʑa]",},
            {"word": "ぢゅ", "translation": "dja, ju [(d)ʑɯ]",},
            {"word": "ぢょ", "translation": "djo, jo [(d)ʑo]",},
            {"word": "ば", "translation": "ba [ba]",},
            {"word": "び", "translation": "bi [bi]",},
            {"word": "ぶ", "translation": "bu [bɯ]",},
            {"word": "べ", "translation": "be [be]",},
            {"word": "ぼ", "translation": "bo [bo]",},
            {"word": "びゃ", "translation": "bya [bʲa]",},
            {"word": "びゅ", "translation": "byu [bʲɯ]",},
            {"word": "びょ", "translation": "byo [bʲo]",},
            {"word": "ぱ", "translation": "pa [pa]",},
            {"word": "ぴ", "translation": "pi [pi]",},
            {"word": "ぷ", "translation": "pu [pɯ]",},
            {"word": "ぺ", "translation": "pe [pe]",},
            {"word": "ぽ", "translation": "po [po]",},
            {"word": "ぴゃ", "translation": "pya [pʲa]",},
            {"word": "ぴゅ", "translation": "pyu [pʲɯ]",},
            {"word": "ぴょ", "translation": "pyo [pʲo]",},
        ],
    },
    {
        "id": 21,
        "name": "Romanization → Hiragana (vowels)",
        "type": "cards",
        "shuffleFirstTime": false,
        "shuffleOtherTimes": true,
        "wordLanguage": "roman",
        "translationLanguage": "japanese",
        "cards": [
            {"word": "a [a]", "translation": "あ"},
            {"word": "i [i]", "translation": "い"},
            {"word": "u [ɯ]", "translation": "う"},
            {"word": "e [e]", "translation": "え"},
            {"word": "o [o]", "translation": "お"},
            {"word": "ya [ja]", "translation": "や"},
            {"word": "yu [jɯ]", "translation": "ゆ"},
            {"word": "yo [jo]", "translation": "よ"
            }
        ]
    },
    {
        "id": 22,
        "name": "Romanization → Hiragana (K)",
        "type": "cards",
        "shuffleFirstTime": false,
        "shuffleOtherTimes": true,
        "wordLanguage": "roman",
        "translationLanguage": "japanese",
        "cards": [
            {"word": "ka [ka]", "translation": "か"},
            {"word": "ki [ki]", "translation": "き"},
            {"word": "ku [kɯ]", "translation": "く"},
            {"word": "ke [ke]", "translation": "け"},
            {"word": "ko [ko]", "translation": "こ"},
            {"word": "kya [kʲa]", "translation": "きゃ"},
            {"word": "kyu [kʲɯ]", "translation": "きゅ"},
            {"word": "kyo [kʲo]", "translation": "きょ"
            }
        ]
    },
    {
        "id": 23,
        "name": "Romanization → Hiragana (S)",
        "type": "cards",
        "shuffleFirstTime": false,
        "shuffleOtherTimes": true,
        "wordLanguage": "roman",
        "translationLanguage": "japanese",
        "cards": [
            {"word": "sa [sa]", "translation": "さ"},
            {"word": "shi [ɕi]", "translation": "し"},
            {"word": "su [sɯ]", "translation": "す"},
            {"word": "se [se]", "translation": "せ"},
            {"word": "so [so]", "translation": "そ"},
            {"word": "sha [ɕa]", "translation": "しゃ"},
            {"word": "shu [ɕɯ]", "translation": "しゅ"},
            {"word": "sho [ɕo]", "translation": "しょ"
            }
        ]
    },
    {
        "id": 24,
        "name": "Romanization → Hiragana (T)",
        "type": "cards",
        "shuffleFirstTime": false,
        "shuffleOtherTimes": true,
        "wordLanguage": "roman",
        "translationLanguage": "japanese",
        "cards": [
            {"word": "ta [ta]", "translation": "た"},
            {"word": "chi [tɕi]", "translation": "ち"},
            {"word": "tsu [tsɯ]", "translation": "つ"},
            {"word": "te [te]", "translation": "て"},
            {"word": "to [to]", "translation": "と"},
            {"word": "cha [tɕa]", "translation": "ちゃ"},
            {"word": "chu [tɕɯ]", "translation": "ちゅ"},
            {"word": "cho [tɕo]", "translation": "ちょ"
            }
        ]
    },
    {
        "id": 25,
        "name": "Romanization → Hiragana (N)",
        "type": "cards",
        "shuffleFirstTime": false,
        "shuffleOtherTimes": true,
        "wordLanguage": "roman",
        "translationLanguage": "japanese",
        "cards": [
            {"word": "na [na]", "translation": "な"},
            {"word": "ni [ɲi]", "translation": "に"},
            {"word": "nu [nɯ]", "translation": "ぬ"},
            {"word": "ne [ne]", "translation": "ね"},
            {"word": "no [no]", "translation": "の"},
            {"word": "nya [ɲa]", "translation": "にゃ"},
            {"word": "nyu [ɲɯ]", "translation": "にゅ"},
            {"word": "nyo [ɲo]", "translation": "にょ"
            }
        ]
    },
    {
        "id": 26,
        "name": "Romanization → Hiragana (H)",
        "type": "cards",
        "shuffleFirstTime": false,
        "shuffleOtherTimes": true,
        "wordLanguage": "roman",
        "translationLanguage": "japanese",
        "cards": [
            {"word": "ha [ha] ([ɰa] as particle)", "translation": "は"},
            {"word": "hi [çi]", "translation": "ひ"},
            {"word": "fu [ɸɯ]", "translation": "ふ"},
            {"word": "he [he] ([e] as particle)", "translation": "へ"},
            {"word": "ho [ho]", "translation": "ほ"},
            {"word": "hya [ça]", "translation": "ひゃ"},
            {"word": "hyu [çɯ]", "translation": "ひゅ"},
            {"word": "hyo [ço]", "translation": "ひょ"
            }
        ]
    },
    {
        "id": 27,
        "name": "Romanization → Hiragana (M)",
        "type": "cards",
        "shuffleFirstTime": false,
        "shuffleOtherTimes": true,
        "wordLanguage": "roman",
        "translationLanguage": "japanese",
        "cards": [
            {"word": "ma [ma]", "translation": "ま"},
            {"word": "mi [mi]", "translation": "み"},
            {"word": "mu [mɯ]", "translation": "む"},
            {"word": "me [me]", "translation": "め"},
            {"word": "mo [mo]", "translation": "も"},
            {"word": "mya [mʲa]", "translation": "みゃ"},
            {"word": "myu [mʲɯ]", "translation": "みゅ"},
            {"word": "myo [mʲo]", "translation": "みょ"
            }
        ]
    },
    {
        "id": 28,
        "name": "Romanization → Hiragana (R)",
        "type": "cards",
        "shuffleFirstTime": false,
        "shuffleOtherTimes": true,
        "wordLanguage": "roman",
        "translationLanguage": "japanese",
        "cards": [
            {"word": "ra [ɾa]", "translation": "ら"},
            {"word": "ri [ɾi]", "translation": "り"},
            {"word": "ru [ɾɯ]", "translation": "る"},
            {"word": "re [ɾe]", "translation": "れ"},
            {"word": "ro [ɾo]", "translation": "ろ"},
            {"word": "rya [ɾʲa]", "translation": "りゃ"},
            {"word": "ryu [ɾʲɯ]", "translation": "りゅ"},
            {"word": "ryo [ɾʲo]", "translation": "りょ"
            }
        ]
    },
    {
        "id": 29,
        "name": "Romanization → Hiragana (W)",
        "type": "cards",
        "shuffleFirstTime": false,
        "shuffleOtherTimes": true,
        "wordLanguage": "roman",
        "translationLanguage": "japanese",
        "cards": [
            {"word": "wa [ɰa]", "translation": "わ"},
            {"word": "wi [i]", "translation": "ゐ"},
            {"word": "we [e]", "translation": "ゑ"},
            {"word": "wo [o]", "translation": "を"
            }
        ]
    },
    {
        "id": 30,
        "name": "Romanization → Hiragana (without diacritics)",
        "type": "cards",
        "shuffleFirstTime": true,
        "shuffleOtherTimes": true,
        "wordLanguage": "roman",
        "translationLanguage": "japanese",
        "cards": [
            {"word": "kyo [kʲo]", "translation": "きょ"},
            {"word": "te [te]", "translation": "て"},
            {"word": "re [ɾe]", "translation": "れ"},
            {"word": "a [a]", "translation": "あ"},
            {"word": "wo [o]", "translation": "を"},
            {"word": "nyo [ɲo]", "translation": "にょ"},
            {"word": "cha [tɕa]", "translation": "ちゃ"},
            {"word": "rya [ɾʲa]", "translation": "りゃ"},
            {"word": "su [sɯ]", "translation": "す"},
            {"word": "ta [ta]", "translation": "た"},
            {"word": "so [so]", "translation": "そ"},
            {"word": "we [e]", "translation": "ゑ"},
            {"word": "sa [sa]", "translation": "さ"},
            {"word": "sha [ɕa]", "translation": "しゃ"},
            {"word": "ko [ko]", "translation": "こ"},
            {"word": "hyo [ço]", "translation": "ひょ"},
            {"word": "i [i]", "translation": "い"},
            {"word": "ne [ne]", "translation": "ね"},
            {"word": "no [no]", "translation": "の"},
            {"word": "ke [ke]", "translation": "け"},
            {"word": "fu [ɸɯ]", "translation": "ふ"},
            {"word": "ro [ɾo]", "translation": "ろ"},
            {"word": "mya [mʲa]", "translation": "みゃ"},
            {"word": "u [ɯ]", "translation": "う"},
            {"word": "mi [mi]", "translation": "み"},
            {"word": "tsu [tsɯ]", "translation": "つ"},
            {"word": "o [o]", "translation": "お"},
            {"word": "cho [tɕo]", "translation": "ちょ"},
            {"word": "na [na]", "translation": "な"},
            {"word": "nu [nɯ]", "translation": "ぬ"},
            {"word": "to [to]", "translation": "と"},
            {"word": "me [me]", "translation": "め"},
            {"word": "yo [jo]", "translation": "よ"},
            {"word": "yu [jɯ]", "translation": "ゆ"},
            {"word": "ryo [ɾʲo]", "translation": "りょ"},
            {"word": "ku [kɯ]", "translation": "く"},
            {"word": "ha [ha] ([ɰa] as particle)", "translation": "は"},
            {"word": "hi [çi]", "translation": "ひ"},
            {"word": "ho [ho]", "translation": "ほ"},
            {"word": "ni [ɲi]", "translation": "に"},
            {"word": "kya [kʲa]", "translation": "きゃ"},
            {"word": "mo [mo]", "translation": "も"},
            {"word": "myu [mʲɯ]", "translation": "みゅ"},
            {"word": "ma [ma]", "translation": "ま"},
            {"word": "ra [ɾa]", "translation": "ら"},
            {"word": "wa [ɰa]", "translation": "わ"},
            {"word": "shu [ɕɯ]", "translation": "しゅ"},
            {"word": "he [he] ([e] as particle)", "translation": "へ"},
            {"word": "myo [mʲo]", "translation": "みょ"},
            {"word": "shi [ɕi]", "translation": "し"},
            {"word": "ki [ki]", "translation": "き"},
            {"word": "mu [mɯ]", "translation": "む"},
            {"word": "ri [ɾi]", "translation": "り"},
            {"word": "chu [tɕɯ]", "translation": "ちゅ"},
            {"word": "nyu [ɲɯ]", "translation": "にゅ"},
            {"word": "hya [ça]", "translation": "ひゃ"},
            {"word": "nya [ɲa]", "translation": "にゃ"},
            {"word": "wi [i]", "translation": "ゐ"},
            {"word": "se [se]", "translation": "せ"},
            {"word": "chi [tɕi]", "translation": "ち"},
            {"word": "e [e]", "translation": "え"},
            {"word": "ru [ɾɯ]", "translation": "る"},
            {"word": "ryu [ɾʲɯ]", "translation": "りゅ"},
            {"word": "ka [ka]", "translation": "か"},
            {"word": "hyu [çɯ]", "translation": "ひゅ"},
            {"word": "sho [ɕo]", "translation": "しょ"},
            {"word": "ya [ja]", "translation": "や"},
            {"word": "kyu [kʲɯ]", "translation": "きゅ"}
        ]
    },
    {
        "id": 31,
        "name": "Romanization → Hiragana (diacritics)",
        "type": "cards",
        "shuffleFirstTime": true,
        "shuffleOtherTimes": true,
        "wordLanguage": "roman",
        "translationLanguage": "japanese",
        "cards": [
            {"word": "be [be]", "translation": "べ"},
            {"word": "za [(d)za]", "translation": "ざ"},
            {"word": "zu [(d)zɯ]", "translation": "ず"},
            {"word": "pyo [pʲo]", "translation": "ぴょ"},
            {"word": "po [po]", "translation": "ぽ"},
            {"word": "gi [ɡi]", "translation": "ぎ"},
            {"word": "gyu [ɡʲɯ]", "translation": "ぎゅ"},
            {"word": "dja, ju [(d)ʑɯ]", "translation": "ぢゅ"},
            {"word": "pya [pʲa]", "translation": "ぴゃ"},
            {"word": "de [de]", "translation": "で"},
            {"word": "pe [pe]", "translation": "ぺ"},
            {"word": "pa [pa]", "translation": "ぱ"},
            {"word": "gu [ɡɯ]", "translation": "ぐ"},
            {"word": "zo [(d)zo]", "translation": "ぞ"},
            {"word": "pi [pi]", "translation": "ぴ"},
            {"word": "ze [(d)ze]", "translation": "ぜ"},
            {"word": "do [do]", "translation": "ど"},
            {"word": "go [ɡo]", "translation": "ご"},
            {"word": "gyo [ɡʲo]", "translation": "ぎょ"},
            {"word": "djo, jo [(d)ʑo]", "translation": "ぢょ"},
            {"word": "ge [ɡe]", "translation": "げ"},
            {"word": "ju [(d)ʑɯ]", "translation": "じゅ"},
            {"word": "ga [ɡa]", "translation": "が"},
            {"word": "ji, dji, jyi [(d)ʑi]", "translation": "ぢ"},
            {"word": "ji [(d)ʑi]", "translation": "じ"},
            {"word": "jo [(d)ʑo]", "translation": "じょ"},
            {"word": "bya [bʲa]", "translation": "びゃ"},
            {"word": "byu [bʲɯ]", "translation": "びゅ"},
            {"word": "dzu, zu [(d)zɯ]", "translation": "づ"},
            {"word": "bu [bɯ]", "translation": "ぶ"},
            {"word": "pyu [pʲɯ]", "translation": "ぴゅ"},
            {"word": "bo [bo]", "translation": "ぼ"},
            {"word": "byo [bʲo]", "translation": "びょ"},
            {"word": "bi [bi]", "translation": "び"},
            {"word": "dja, ja [(d)ʑa]", "translation": "ぢゃ"},
            {"word": "ja [(d)ʑa]", "translation": "じゃ"},
            {"word": "gya [ɡʲa]", "translation": "ぎゃ"},
            {"word": "da [da]", "translation": "だ"},
            {"word": "ba [ba]", "translation": "ば"},
            {"word": "pu [pɯ]", "translation": "ぷ"
            }
        ]
    },
    {
        "id": 200,
        "name": "Romanization → Hiragana",
        "type": "cards",
        "wordLanguage": "roman",
        "translationLanguage": "japanese",
        "cards": []
    },
    {
        "id": 99999,
        "name": "DEV",
        "type": "pick-a-sequence",
        "sequenceLanguage": "japanese",
        "transcriptionLanguage": "roman",
        "translationLanguage": "english",
        "sequences": [
            {
                "sequence": ["こ", "ん", "に", "ち", "は"],
                "transcription": ["ko", "n", "ni", "chi", "wa"],
                "translation": "Hello/Good day"
            },
            {
                "sequence": "もしもし",
                "transcription": ["mo", "shi", "mo", "shi"],
                "translation": "Hello (on the phone/Skype)"
            },
            {
                "sequence": "おげんきですか",
                "suffix": "?",
                "transcription": ["o", "ge", "n", "ki", "de", "su", "ka"],
                "translation": "How are you?"
            },
            {
                "sequence": "げんきです",
                "transcription": ["ge", "n", "ki", "de", "su"],
                "translation": "I’m good."
            },
            {
                "sequence": ["お", "しゃ", "し", "ぶ", "り", "で", "す"],
                "transcription": ["o", "sha", "shi", "bu", "ri", "de", "su"],
                "translation": "Long time no see."
            },
            {
                "sequence": "おねがいします",
                "transcription": ["o", "ne", "ga", "i", "shi", "ma", "su"],
                "translation": "Please"
            },
            {
                "sequence": "どうも ありがとう ございます",
                "transcription": ["do", "u", "mo", " ", "a", "ri", "ga", "to", "u", " ", "go", "za", "i", "ma", "su"],
                "translation": "Thank you so much"
            },
            {
                "sequence": "すみません",
                "transcription": ["su", "mi", "ma", "se", "n"],
                "translation": "Excuse me"
            },
            {
                "sequence": "ごめんなさい",
                "transcription": ["go", "me", "n", "na", "sa", "i"],
                "translation": "I’m sorry"
            },
            {
                "sequence": "どういたしまして",
                "transcription": ["do", "u", "i", "ta", "shi", "ma", "shi", "te"],
                "translation": "You’re welcome"
            },
            {
                "sequence": "いま いそがしい です か",
                "suffix": "?",
                "transcription": ["i", "ma", " ", "i", "so", "ga", "shi", "i", " ", "de", "su", " ", "ka"],
                "translation": "Are you busy now?"
            },
            {
                "sequence": ["こ", "ん", "しゅ", "う", "ま", "つ", " ", "よ", "て", "い", " ", "が", " ", "あ", "り", "ま", "す", " ", "か"],
                "suffix": "?",
                "transcription": ["ko", "n", "shu", "u", "ma", "tsu", " ", "yo", "te", "i", " ", "ga", " ", "a", "ri", "ma", "su", " ", "ka"],
                "translation": "What are you plans this weekend?"
            },
            {
                "sequence": ["か", "ぞ", "く", " ", "の", " ", "み", "な", "さ", "ん", " ", "わ", " ", "い", "か", "が", " ", "で", "す", " ", "か"],
                "suffix": "?",
                "transcription": ["ka", "zo", "ku", " ", "no", " ", "mi", "na", "sa", "n", " ", "wa", " ", "i", "ka", "ga", " ", "de", "su", " ", "ka"],
                "translation": "How is your family?"
            },
            {
                "sequence": ["じ", "こ", " ", "しょ", "う", "か", "い", " ", "を", " ", "お", "ね", "が", "い", "し", "ま", "す"],
                "transcription": ["ji", "ko", " ", "sho", "u", "ka", "i", " ", "o", " ", "o", "ne", "ga", "i", "shi", "ma", "su"],
                "translation": "Tell me about yourself"
            },
            {
                "sequence": "どう おもいます か",
                "suffix": "?",
                "transcription": ["do", "u", " ", "o", "mo", "i", "ma", "su", " ", "ka"],
                "translation": "What do you think?"
            },
            {
                "sequence": "それ わ えいご で なんと いいます か",
                "suffix": "?",
                "transcription": ["so", "re", " ", "wa", " ", "e", "i", "go", " ", "de", " ", "na", "n", "to", " ", "i", "i", "ma", "su", " ", "ka"],
                "translation": "How do you say that in English?"
            },
            {
                "sequence": "わかりません",
                "transcription": ["wa", "ka", "ri", "ma", "se", "n"],
                "translation": "I don’t understand."
            },
            {
                "sequence": "わすれました",
                "transcription": ["wa", "su", "re", "ma", "shi", "ta"],
                "translation": "I forgot"
            },
            {
                "sequence": "しりません",
                "transcription": ["shi", "ri", "ma", "se", "n"],
                "translation": "I don’t know."
            },
            {
                "sequence": ["も", "と", " ", "ゆ", "っく", "り", " ", "は", "ん", "し", "て"],
                "suffix": "?",
                "transcription": ["mo", "to", " ", "yu", "kku", "ri", " ", "ha", "n", "shi", "te"],
                "translation": "Can you please say it slowly?"
            },
            {
                "sequence": "まい にち",
                "transcription": ["ma", "i", " ", "ni", "chi"],
                "translation": "Every day"
            },
            {
                "sequence": "じじ",
                "transcription": ["ji", "ji"],
                "translation": "Sometimes"
            },
            {
                "sequence": "いま",
                "transcription": ["i", "ma"],
                "translation": "Now"
            },
            {
                "sequence": "あとで",
                "transcription": ["a", "to", "de"],
                "translation": "Later"
            },
            {
                "sequence": "たぶん",
                "transcription": ["ta", "bu", "n"],
                "translation": "Maybe"
            },
            // {
            //     "sequence": [""],
            //     "transcription": [""],
            //     "translation": ""
            // },
        ],
        "alphabet": [
            "a", "i", "u", "e", "o", "ya", "yu", "yo",
            "ka", "ki", "ku", "ke", "ko", "kya", "kyu", "kyo",
            "sa", "shi", "su", "se", "so", "sha", "shu", "sho",
            "ta", "chi", "tsu", "te", "to", "cha", "chu", "cho",
            "na", "ni", "nu", "ne", "no", "nya", "nyu", "nyo",
            "ha", "hi", "fu", "he", "ho", "hya", "hyu", "hyo",
            "ma", "mi", "mu", "me", "mo", "mya", "myu", "myo",
            "ra", "ri", "ru", "re", "ro", "rya", "ryu", "ryo",
            "wa", "wi",       "we", "wo",
            "ga", "gi", "gu", "ge", "go", "gya", "gyu", "gyo",
            "za", "ji", "zu", "ze", "zo", "ja", "ju", "jo",
            "da", "dji", "dzu", "de", "do", "dja", "dju", "djo",
            "ba", "bi", "bu", "be", "bo", "bya", "byu", "byo",
            "pa", "pi", "pu", "pe", "po", "pya", "pyu", "pyo"
        ],
        "suggestCurrentCharacterTranscriptions": 4
    },
    // {
    //     "id": 3,
    //     "name": "Katakana → Romanization",
    //     "type": "cards",
    //     "wordLanguage": "japanese",
    //     "translationLanguage": "roman",
    //     "cards": []
    // },
    // {
    //     "id": 4,
    //     "name": "Romanization → Katakana",
    //     "type": "cards",
    //     "wordLanguage": "roman",
    //     "translationLanguage": "japanese",
    //     "cards": []
    // }
];

const HIRAGANA = [
    "あ", "い", "う", "え", "お", "や", "ゆ", "よ",
    "か", "き", "く", "け", "こ", "きゃ", "きゅ", "きょ",
    "さ", "し", "す", "せ", "そ", "しゃ", "しゅ", "しょ",
    "た", "ち", "つ", "て", "と", "ちゃ", "ちゅ", "ちょ",
    "な", "に", "ぬ", "ね", "の", "にゃ", "にゅ", "にょ",
    "は", "ひ", "ふ", "へ", "ほ", "ひゃ", "ひゅ", "ひょ",
    "ま", "み", "む", "め", "も", "みゃ", "みゅ", "みょ",
    "ら", "り", "る", "れ", "ろ", "りゃ", "りゅ", "りょ",
    "わ", "ゐ",       "ゑ", "を",
    "が", "ぎ", "ぐ", "げ", "ご", "ぎゃ", "ぎゅ", "ぎょ",
    "ざ", "じ", "ず", "ぜ", "ぞ", "じゃ", "じゅ", "じょ",
    "だ", "ぢ", "づ", "で", "ど", "ぢゃ", "ぢゅ", "ぢょ",
    "ば", "び", "ぶ", "べ", "ぼ", "びゃ", "びゅ", "びょ",
    "ぱ", "ぴ", "ぷ", "ぺ", "ぽ", "ぴゃ", "ぴゅ", "ぴょ"
];

const HIRAGANA_TRANSCRIPTION = [
    "a", "i", "ɯ", "e", "o", "ja", "jɯ", "jo",
    "ka", "ki", "kɯ", "ke", "ko", "kʲa", "kʲɯ", "kʲo",
    "sa", "ɕi", "sɯ", "se", "so", "ɕa", "ɕɯ", "ɕo",
    "ta", "tɕi", "tsɯ", "te", "to", "tɕa", "tɕɯ", "tɕo",
    "na", "ɲi", "nɯ", "ne", "no", "ɲa", "ɲɯ", "ɲo",
    "ha/ɰa", "çi", "ɸɯ", "he/e", "ho", "ça", "çɯ", "ço",
    "ma", "mi", "mɯ", "me", "mo", "mʲa", "mʲɯ", "mʲo",
    "ɾa", "ɾi", "ɾɯ", "ɾe", "ɾo", "ɾʲa", "ɾʲɯ", "ɾʲo",
    "ɰa", "i", "e", "o"
];
