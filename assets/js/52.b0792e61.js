(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{487:function(t,s,a){"use strict";a.r(s);var n=a(43),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"запасная-nокаnизация"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#запасная-nокаnизация"}},[t._v("#")]),t._v(" Запасная локализация")]),t._v(" "),a("p",[a("em",[t._v("Вкратце: указывайте "),a("code",[t._v("fallbackLocale: '<lang>'")]),t._v(" для определения языка, который будет использоваться, если нет перевода в выбранной локализации.")])]),t._v(" "),a("h2",{attrs:{id:"неявное-опредеnение-запасных-nокаnизаций-при-испоnьзовании-nокаnей"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#неявное-опредеnение-запасных-nокаnизаций-при-испоnьзовании-nокаnей"}},[t._v("#")]),t._v(" Неявное определение запасных локализаций при использовании локалей")]),t._v(" "),a("p",[t._v("Если "),a("code",[t._v("locale")]),t._v(" содержит территорию и опционально диалект, то неявно будут определены автоматически запасные локали.")]),t._v(" "),a("p",[t._v("Например для "),a("code",[t._v("de-DE-bavarian")]),t._v(" в качестве запасных будут считаться следующие:")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("de-DE-bavarian")])]),t._v(" "),a("li",[a("code",[t._v("de-DE")])]),t._v(" "),a("li",[a("code",[t._v("de")])])]),t._v(" "),a("p",[t._v("Для отключения автоматического определения запасных локалей укажите символ "),a("code",[t._v("!")]),t._v(", например "),a("code",[t._v("de-DE!")])]),t._v(" "),a("h2",{attrs:{id:"явное-опредеnение-одной-nокаnи-запасной-nокаnизации"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#явное-опредеnение-одной-nокаnи-запасной-nокаnизации"}},[t._v("#")]),t._v(" Явное определение одной локали запасной локализации")]),t._v(" "),a("p",[t._v("Иногда не все ключи сообщений переведены на другие языки. В примере ниже, сообщение для ключа "),a("code",[t._v("hello")]),t._v(" доступно в английской локали, но отсутствует в русской:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" messages "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  en"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    hello"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello, world!'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  ru"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// упс, не все переведено")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Если хочется использовать сообщения локализации из "),a("code",[t._v("en")]),t._v(", когда перевод отсутствует в нужной локализации, то следует указать опцию "),a("code",[t._v("fallbackLocale")]),t._v(" в конструкторе VueI18n:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" i18n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VueI18n")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  locale"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ru'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  fallbackLocale"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'en'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  messages\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("Шаблон:")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ $t('hello') }}"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("Результат:")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Hello, world!"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("По умолчанию, если использовались сообщения запасной локализации из "),a("code",[t._v("fallbackLocale")]),t._v(", то в консоли будут выведены соответствующие предупреждения:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("[vue-i18n] Value of key 'hello' is not a string!\n[vue-i18n] Fall back to translate the keypath 'hello' with 'en' locale.\n")])])]),a("p",[t._v("Чтобы скрыть такие предупреждения (оставив при этом те, в случаях полного отсутствия переводов для данного ключа) установите "),a("code",[t._v("silentFallbackWarn: true")]),t._v(" при инициализации экземпляра "),a("code",[t._v("VueI18n")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"явное-опредеnение-запасной-nокаnи-с-помощью-массива"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#явное-опредеnение-запасной-nокаnи-с-помощью-массива"}},[t._v("#")]),t._v(" Явное определение запасной локали с помощью массива")]),t._v(" "),a("p",[t._v("Можно указать более одной запасной локализации с помощью массива. Например:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("fallbackLocale"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ru'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'en'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("h2",{attrs:{id:"явное-опредеnение-запасной-nокаnи-с-помощью-объекта"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#явное-опредеnение-запасной-nокаnи-с-помощью-объекта"}},[t._v("#")]),t._v(" Явное определение запасной локали с помощью объекта")]),t._v(" "),a("p",[t._v("Более сложный алгоритм принятия решений для определения запасной локали можно реализовать с помощью карты принятия решений в виде объекта.")]),t._v(" "),a("p",[t._v("Например для подобного объекта:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("fallbackLocale"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 1 */")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'de-CH'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fr'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'it'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 2 */")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'zh-Hant'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'zh-Hans'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 3 */")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'es-CL'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'es-AR'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 4 */")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'es'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'en-GB'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 5 */")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pt'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'es-AR'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 6 */")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'default'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'en'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ru'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("p",[t._v("Будут следующие цепочки выбора запасной локали:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Локаль")]),t._v(" "),a("th",[t._v("Цепочка выбора")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("'de-CH'")])]),t._v(" "),a("td",[t._v("de-CH > fr > it > en > ru")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("'de'")])]),t._v(" "),a("td",[t._v("de > en > ru")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("'zh-Hant'")])]),t._v(" "),a("td",[t._v("zh-Hant > zh-Hans > zh > en > ru")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("'es-SP'")])]),t._v(" "),a("td",[t._v("es-SP > es > en-GB > en > ru")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("'es-SP!'")])]),t._v(" "),a("td",[t._v("es-SP > en > ru")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("'fr'")])]),t._v(" "),a("td",[t._v("fr > en > ru")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("'pt-BR'")])]),t._v(" "),a("td",[t._v("pt-BR > pt > es-AR > es > en-GB > en > ru")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("'es-CL'")])]),t._v(" "),a("td",[t._v("es-CL > es-AR > es > en-GB > en > ru")])])])]),t._v(" "),a("h2",{attrs:{id:"резервная-интерпоnяция"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#резервная-интерпоnяция"}},[t._v("#")]),t._v(" Резервная интерполяция")]),t._v(" "),a("p",[a("em",[t._v("Вкратце: установите "),a("code",[t._v("formatFallbackMessages: true")]),t._v(" чтобы выполнять интерполяции шаблона по ключам перевода, когда в выбранном языке отсутствует данный ключ для перевода.")])]),t._v(" "),a("p",[t._v("Так как ключи переводов являются строками, то можно использовать само сообщение в качестве ключа (для определённого языка). Например:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" messages "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  ru"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello, world!'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Привет мир!'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v('Это может быть полезным, потому что не нужно будет указывать перевод для строки "Hello, world!" в английской локализации.')]),t._v(" "),a("p",[t._v("Фактически, можно указывать даже параметры в ключе. Вместе с "),a("code",[t._v("formatFallbackMessages: true")]),t._v(" это позволит опустить создание шаблонов для «базового» языка; потому что его ключи "),a("em",[t._v("уже находятся")]),t._v(" в шаблоне.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" messages "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  ru"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello {name}'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Здравствуйте {name}'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" i18n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VueI18n")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  locale"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ru'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  fallbackLocale"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'en'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  formatFallbackMessages"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  messages\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("Шаблон:")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ $t('Hello {name}', { name: 'John' }}) }}"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ $t('The weather today is {condition}!', { condition: 'sunny' }) }}"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("Результат:")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Здравствуйте, John"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("The weather today is sunny!"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);