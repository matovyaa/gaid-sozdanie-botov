import CodeBlock from '../components/CodeBlock';
import InfoBox from '../components/InfoBox';
import Table from '../components/Table';
import ImageBlock from '../components/ImageBlock';
import VisualDivider from '../components/VisualDivider';
import FeatureCard from '../components/FeatureCard';
import Tooltip from '../components/Tooltip';
import BilingualCode from '../components/BilingualCode';

export function getSectionContent(sectionNumber: number) {
  switch (sectionNumber) {
    case 1:
      return (
        <>
          <p className="text-lg leading-relaxed mb-4">
            Окей, ты хочешь создать персонажа на Frendi. Может, ты уже пробовал — написал имя, пару строк описания, 
            нажал «создать» и получил бота, который отвечает как инструкция к холодильнику. Знакомо?
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Дело не в том, что ИИ плохой. Дело в том, что ИИ буквально работает только с тем, что ты ему дал. 
            Если ты дал мало — он придумал остальное сам. Если ты дал расплывчато — он понял по-своему. 
            Если ты дал много, но всё в одну кучу — он запутался.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Этот гайд — о том, как дать ИИ ровно то, что нужно. Чтобы твой персонаж был собой: говорил твоими словами, 
            думал в рамках твоего мира, цеплял людей с первого сообщения.
          </p>
          <InfoBox type="info">
            <strong>Гайд подойдёт всем:</strong> тем, кто впервые открывает Frendi и не понимает, что такое <code className="text-purple-300">{'{{char}}'}</code>; 
            и тем, кто уже делал ботов, но хочет понять, почему они выходят «не такими».
          </InfoBox>
        </>
      );

    case 2:
      return (
        <>
          <ImageBlock 
            src="./images/ai-brain.jpg"
            alt="AI Neural Network"
            caption="Как работает ИИ — визуализация нейронной сети"
          />
          
          <p className="text-lg leading-relaxed mb-4">
            Прежде чем лезть в поля и шаблоны, важно понять одну вещь: <strong>ИИ на Frendi — это языковая модель</strong> (LLM, Large Language Model). 
            По принципу работы — что-то похожее на Gemini, Claude или другие большие модели.
          </p>
          <p className="text-lg leading-relaxed mb-4">Что это значит на практике?</p>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>ИИ <strong>не запоминает</strong> прошлые чаты (если это не записано в специальных полях или в памяти чата)</li>
            <li>ИИ <strong>читает контекст</strong> — всё, что написано в полях персонажа, воспринимается как инструкция к тому, как себя вести</li>
            <li>ИИ <strong>подражает</strong> стилю — если первое сообщение написано живо и красиво, он будет стараться поддерживать этот уровень</li>
            <li>ИИ <strong>не понимает команды</strong> типа /reset или /stay in character — это не чатбот с командной строкой</li>
            <li>ИИ <strong>отлично понимает структурированный текст</strong> — теги, заголовки, списки помогают ему воспринимать информацию чище</li>
          </ul>
          <InfoBox type="highlight">
            <p className="font-semibold mb-2">Постоянная память персонажа</p>
            <p className="mb-2">Это то, что бот «знает» всегда, вне зависимости от длины чата. На Frendi к постоянной памяти относятся:</p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li><strong>Имя</strong> персонажа</li>
              <li><strong>Описание</strong> (его видят пользователи)</li>
              <li><strong>Инструкция</strong> (её видит только ИИ)</li>
              <li><strong>Тон персонажа</strong></li>
              <li><strong>Первое сообщение</strong></li>
              <li>Поле «Память чата» (если настроено)</li>
              <li>Данные из подключённого <strong>Сюжета</strong></li>
            </ul>
          </InfoBox>
          <p className="text-lg leading-relaxed mt-4">
            Всё остальное, что было написано в переписке, постепенно «уходит» из памяти по мере роста чата. 
            Поэтому так важно грамотно заполнить именно постоянные поля.
          </p>
        </>
      );

    case 3:
      return (
        <>
          <ImageBlock 
            src="./images/character-creation.jpg"
            alt="Character Creation Process"
            caption="Процесс создания персонажа — от идеи до реализации"
          />
          
          <p className="text-lg leading-relaxed mb-6">
            Перед тем как открывать форму создания, ответь себе на несколько вопросов. Это сэкономит тебе кучу времени.
          </p>
          
          <h3 className="text-2xl font-bold text-purple-300 mb-4">Кто вообще твой персонаж?</h3>
          <p className="text-lg leading-relaxed mb-4">
            Есть несколько принципиально разных типов ботов, и у каждого — своя логика создания:
          </p>
          
          <Table
            headers={['Тип', 'Что это', 'Особенности']}
            rows={[
              ['<strong>РП-персонаж</strong>', 'Герой для ролевой игры, истории', 'Нужен характер, бэкстори, сюжет, стиль речи'],
              ['<strong>Фандомный персонаж</strong>', 'Кто-то из аниме, игры, книги, фильма', 'ИИ часто его знает — можно не прописывать всё с нуля'],
              ['<strong>ОС (original character)</strong>', 'Твой авторский персонаж', 'Нужно прописать всё, ИИ его не знает'],
              ['<strong>Ассистент</strong>', 'Помощник, советник, инструмент', 'Акцент на функции, не на характере'],
              ['<strong>Психолог / собеседник</strong>', 'Поддержка, разговоры по душам', 'Акцент на эмпатии, стиле общения, границах'],
              ['<strong>РПГ / игра</strong>', 'Интерактивная игровая система', 'Нужны правила, развилки, роли']
            ]}
          />
          
          <p className="text-lg leading-relaxed mt-6 mb-4">
            Определись с типом — это влияет на то, что именно и куда ты пишешь.
          </p>
          
          <h3 className="text-2xl font-bold text-purple-300 mb-4 mt-8">Для кого персонаж?</h3>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li><strong>Для себя (приватно)</strong> — можно не заморачиваться с красивым описанием, главное чтобы работало</li>
            <li><strong>Для других (публично)</strong> — описание становится витриной, первое сообщение — первым впечатлением</li>
          </ul>
          
          <h3 className="text-2xl font-bold text-purple-300 mb-4">Есть ли уже идея?</h3>
          <p className="text-lg leading-relaxed">
            Если есть — отлично. Если нет — можешь воспользоваться{' '}
            <a 
              href="https://frendi.ai/chat/dcb15e92-989e-42d5-9c0f-2577bd81162b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 underline decoration-purple-500/50 hover:decoration-purple-400 transition-colors font-semibold"
            >
              ботом-ассистентом
            </a>
            {' '}прямо на Frendi или написать в{' '}
            <a 
              href="https://t.me/matovya_creator"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 underline decoration-purple-500/50 hover:decoration-purple-400 transition-colors font-semibold"
            >
              «Хрущевку»
            </a>
            {' '}— я всегда помогу лично. Вместе придумаем концепцию и составим основу инструкции.
          </p>
        </>
      );

    case 4:
      return (
        <>
          <p className="text-sm text-purple-300 mb-4"><strong>Формат:</strong> JPG или PNG, до 5 МБ</p>
          <p className="text-lg leading-relaxed mb-6">
            Первое, что человек видит в каталоге — это изображение. Это буквально обложка твоего персонажа.
          </p>
          
          <h3 className="text-2xl font-bold text-purple-300 mb-4">Что делает изображение хорошим:</h3>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>Чёткое, качественное — без пикселей и размытия</li>
            <li>Портрет или три четверти (лицо хорошо читается)</li>
            <li>Выражение лица соответствует характеру персонажа</li>
            <li>Нет чужих логотипов, водяных знаков, посторонних надписей</li>
            <li>Атмосфера совпадает с образом</li>
          </ul>
          
          <h3 className="text-2xl font-bold text-purple-300 mb-4">Где взять:</h3>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li><strong>Прямо на Frendi</strong> — встроенная генерация изображений</li>
            <li><strong>Imagen 3 (Nano Banana)</strong> — быстрая и качественная генерация от Google (бесплатно)</li>
            <li><strong>Midjourney, Leonardo AI, Playground AI</strong> — для уникальных артов и генераций</li>
            <li><strong>Artbreeder</strong> — для создания и смешивания портретов</li>
            <li><strong>Pexels, Unsplash</strong> — для реалистичных портретов (бесплатно и без авторских прав)</li>
            <li><strong>Pinterest</strong> — для поиска референсов и стилизованных образов</li>
            <li><strong>Canva, Fotor</strong> — для редактирования и обработки</li>
          </ul>
          
          <h3 className="text-2xl font-bold text-purple-300 mb-4">Небольшие советы по атмосфере:</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Тёмный, мрачный персонаж → холодное освещение, контраст, тени</li>
            <li>Добрый, светлый → мягкие тона, улыбка, открытый взгляд</li>
            <li>Аниме-стиль → арты (но избегай узнаваемых персонажей из фандомов — это может привести к путанице)</li>
          </ul>
        </>
      );

    case 5:
      return (
        <>
          <p className="text-lg leading-relaxed mb-6">
            Имя — это первый контакт. Оно должно быть читаемым, запоминающимся и давать хоть какое-то ощущение персонажа.
          </p>
          
          <InfoBox type="highlight">
            <p className="font-semibold mb-2">Формула, которая работает:</p>
            <p className="text-center text-xl"><strong>Имя + короткий "титул" или контекст</strong></p>
            <p className="mt-2 text-sm">Это помогает сразу понять суть — ещё до того, как человек откроет описание.</p>
          </InfoBox>
          
          <h3 className="text-2xl font-bold text-green-400 mb-4 mt-8">✅ Примеры удачных имён:</h3>
          <CodeBlock language="text">
{`Виктор | Он знает о тебе больше, чем ты думаешь
Эйви — твой ленивый научный ассистент
Арес | Бог войны, у которого кончилось терпение
Лина — просто выслушает`}
          </CodeBlock>
          
          <h3 className="text-2xl font-bold text-red-400 mb-4 mt-8">❌ Примеры неудачных имён:</h3>
          <CodeBlock language="text">
{`Персонаж 1           ← ничего не говорит
Очень крутой бот     ← звучит как спам
Северус Снегг из Гарри Поттера  ← слишком длинно, лучше просто "Северус Снегг"`}
          </CodeBlock>
          
          <InfoBox type="tip">
            <strong>Лайфхак:</strong> Можно указать в имени жанр или атмосферу — "Доктор Холод | детектив без сострадания" уже интригует.
          </InfoBox>
        </>
      );

    case 6:
      return (
        <>
          <p className="text-lg leading-relaxed mb-4">
            Это поле <strong>видят пользователи</strong> в карточке персонажа. Его читают, чтобы решить — хочу я с ним поговорить или нет?
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Инструкция пользователям не видна. Значит, описание — это твой единственный шанс зацепить их вниманием напрямую.
          </p>
          
          <h3 className="text-2xl font-bold text-purple-300 mb-4">Что должно быть в описании:</h3>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li><strong>Кто это</strong> — роль, суть, архетип (но не сухой список)</li>
            <li><strong>Какой он</strong> — одна-две яркие черты характера</li>
            <li><strong>Какое ощущение</strong> он создаёт — атмосфера, крючок, интрига</li>
            <li>Можно намекнуть на <strong>ситуацию или сеттинг</strong></li>
          </ul>
          
          <h3 className="text-2xl font-bold text-purple-300 mb-4">Чего не должно быть:</h3>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>Повторения того, что будет в инструкции (экономь символы!)</li>
            <li>Сухого перечисления: «Персонаж который умеет говорить» — это ничего не даёт</li>
            <li>Спойлеров всего характера — оставь место для открытия</li>
          </ul>
          
          <h3 className="text-2xl font-bold text-green-400 mb-4 mt-8">Примеры хорошего описания:</h3>
          
          <div className="space-y-6">
            <div className="bg-slate-800/50 p-4 rounded-lg border-l-4 border-purple-500">
              <p className="text-sm text-purple-300 font-semibold mb-2">Мрачный детектив:</p>
              <p className="text-gray-300 italic">
                Он давно перестал верить в случайности. Виктор Нарр — детектив, который видит ложь раньше, 
                чем ты успеваешь её произнести. Холодный. Точный. И почему-то всё равно продолжает искать людей, 
                в которых ещё есть что-то настоящее.
              </p>
            </div>
            
            <div className="bg-slate-800/50 p-4 rounded-lg border-l-4 border-purple-500">
              <p className="text-sm text-purple-300 font-semibold mb-2">Добрый собеседник:</p>
              <p className="text-gray-300 italic">
                Лина не будет давать советы, которые ты не просил. Она просто будет рядом — с тёплым чаем, 
                тихим вечером и умением слушать так, что говорить становится легче. Иногда это всё, что нужно.
              </p>
            </div>
            
            <div className="bg-slate-800/50 p-4 rounded-lg border-l-4 border-purple-500">
              <p className="text-sm text-purple-300 font-semibold mb-2">Аниме-злодей:</p>
              <p className="text-gray-300 italic">
                Он проиграл один раз — и решил, что больше не будет. Кай не просит прощения и не объясняет своих методов. 
                Если ты здесь, значит, ты уже часть его плана. Вопрос только — какая.
              </p>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-red-400 mb-4 mt-8">❌ Пример плохого описания:</h3>
          <div className="bg-red-900/20 p-4 rounded-lg border-l-4 border-red-500 mb-4">
            <p className="text-gray-300 italic mb-2">
              Это персонаж из аниме. Он злой, умный и сильный. У него чёрные волосы и красные глаза. 
              Он не любит слабых людей и всегда побеждает.
            </p>
            <p className="text-sm text-red-300">
              <strong>Почему плохо?</strong> Скучно, нет атмосферы, нет крючка. Человек закроет карточку через три секунды.
            </p>
          </div>
        </>
      );

    case 7:
      return (
        <>
          <ImageBlock 
            src="./images/writing-code.jpg"
            alt="Writing Instructions"
            caption="Инструкция — сердце вашего персонажа"
          />
          
          <p className="text-lg leading-relaxed mb-4">
            Это <strong>самое важное поле</strong>. Именно здесь живёт твой персонаж по-настоящему.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Пользователи инструкцию <strong>не видят</strong> — это твоя коммуникация напрямую с ИИ. Ты объясняешь ему: 
            кто этот персонаж, как он говорит, что происходит, кто ещё есть в этой истории.
          </p>
          
          <InfoBox type="warning">
            <strong>Важно понимать:</strong> 2000 символов — это примерно 250–300 слов. Немного. 
            Поэтому каждое слово должно работать. Никакой воды, никаких красивых оборотов — ИИ любит чёткие, конкретные инструкции.
          </InfoBox>
          
          <h3 className="text-2xl font-bold text-purple-300 mb-4 mt-8">
            🔑 Что такое <Tooltip text="{{char}}" translation="Переменная для обозначения вашего персонажа в инструкции" /> и <Tooltip text="{{user}}" translation="Переменная для обозначения пользователя, который общается с ботом" />
          </h3>
          <p className="text-lg leading-relaxed mb-4">
            Это <strong>переменные</strong> — специальные метки, которые ИИ понимает особым образом.
          </p>
          
          <div className="my-6">
            <Table
              headers={['Переменная', 'Что означает', 'Пример использования']}
              rows={[
                ['<code>{{char}}</code>', 'Твой персонаж', '<code>{{char}} speaks sharply but never rudely</code><br/><span class="text-xs text-gray-400">говорит резко, но никогда не грубит</span>'],
                ['<code>{{user}}</code>', 'Пользователь, который общается с ботом', '<code>{{char}} treats {{user}} with caution</code><br/><span class="text-xs text-gray-400">относится к пользователю с осторожностью</span>']
              ]}
            />
          </div>
          
          <InfoBox type="info" className="mt-6">
            <strong>Зачем это нужно?</strong> Когда ты пишешь имя персонажа напрямую (например, «Виктор говорит резко»), 
            ИИ воспринимает это как описание конкретного Виктора. Но если завтра кто-то назовёт своего персонажа иначе — связь теряется. 
            <code className="text-purple-300">{'{{char}}'}</code> — это универсальная ссылка, которая всегда указывает именно на твоего бота.
          </InfoBox>
          
          <h3 className="text-2xl font-bold text-purple-300 mb-4 mt-8">📐 Структура инструкции</h3>
          <p className="text-lg leading-relaxed mb-4">
            Не существует одного «правильного» шаблона, но есть рабочая структура. Адаптируй под своего персонажа:
          </p>
          
          <InfoBox type="tip" className="mb-4">
            <strong>💡 Важно:</strong> Инструкция пишется на английском для лучшего понимания ИИ. Ниже — шаблон с пояснениями на русском.
          </InfoBox>
          
          <BilingualCode
            language="text"
            english={`OVERVIEW
{{char}} — [1-2 sentences: who, where, why]

APPEARANCE
[Brief description: height, hair, eyes, clothing style, distinctive features]

PERSONALITY
[Character traits, behavior in different situations]
With {{user}}: [specific behavior with user]
When alone/cornered: [if important for character]

BACKSTORY
[Brief backstory — only the essentials]

SPEECH
[How they speak: sentence length, vocabulary, habits, manner]

SCENARIO
[Situation where communication begins. Place, time, context]

RULES
[What character does/doesn't do. Special behavior rules]`}
            russian={`ОБЗОР
{{char}} — [1-2 предложения: кто, где, зачем]

ВНЕШНОСТЬ
[Краткое описание: рост, волосы, глаза, стиль одежды, отличительные черты]

ЛИЧНОСТЬ
[Черты характера, поведение в разных ситуациях]
С {{user}}: [конкретика поведения с пользователем]
Когда один/в углу: [если это важно для персонажа]

ПРЕДЫСТОРИЯ
[Краткая предыстория — только самое важное]

РЕЧЬ
[Как говорит: длина фраз, словарный запас, привычки, манера]

СЦЕНАРИЙ
[Ситуация, в которой начинается общение. Место, время, контекст]

ПРАВИЛА
[Что персонаж делает/не делает. Особые правила поведения]`}
          />
          
          <p className="text-lg leading-relaxed mt-6 mb-8">
            Это не жёсткий список — некоторые блоки можно убрать, другие объединить. Главное — не дублировать информацию между блоками.
          </p>
          
          <h3 className="text-2xl font-bold text-purple-300 mb-4">Пример заполненной инструкции:</h3>
          <p className="text-sm text-purple-300 mb-4"><strong>Персонаж: Виктор Нарр, детектив</strong></p>
          
          <BilingualCode
            language="text"
            english={`OVERVIEW
{{char}} is Victor Narr, a private detective in a noir city. Cold, precise, 
disillusioned. {{user}} has come to him with a case.

APPEARANCE
30s, tall, lean. Dark circles, sharp jaw. Always in a grey coat. 
Scar above left brow. Moves quietly.

PERSONALITY
Cynical but observant. Speaks only when necessary. 
Notices details {{user}} misses. Doesn't reassure — states facts.
With {{user}}: guarded at first, slowly opens if {{user}} proves useful or honest.
Dislikes emotional outbursts. Respects directness.

BACKSTORY
Lost his partner on a case five years ago. Never found who was responsible. 
Keeps working. Doesn't talk about it.

SPEECH
Short, dry sentences. No small talk. Occasionally dark humor. 
Never says more than needed. Pauses before answering.

SCENARIO
{{user}} arrives at {{char}}'s office. Evening. Rain outside. 
They have information about a disappearance — or maybe they ARE the disappearance.

RULES
{{char}} never lies outright — but withholds information.
Does not comfort {{user}}. Does not give easy answers.
Maintains professional distance unless trust is earned over time.`}
            russian={`ОБЗОР
{{char}} — это Виктор Нарр, частный детектив в нуар-городе. Холодный, точный, 
разочарованный. {{user}} пришёл к нему с делом.

ВНЕШНОСТЬ
30 с чем-то, высокий, худощавый. Темные круги под глазами, острая челюсть. Всегда в сером пальто. 
Шрам над левой бровью. Двигается тихо.

ЛИЧНОСТЬ
Циничный, но наблюдательный. Говорит только когда необходимо. 
Замечает детали, которые {{user}} упускает. Не успокаивает — излагает факты.
С {{user}}: настороженный поначалу, медленно открывается если {{user}} окажется полезным или честным.
Не любит эмоциональные вспышки. Уважает прямоту.

ПРЕДЫСТОРИЯ
Потерял своего напарника на деле пять лет назад. Так и не нашёл, кто был ответственен. 
Продолжает работать. Не говорит об этом.

РЕЧЬ
Короткие, сухие предложения. Никаких светских бесед. Иногда мрачный юмор. 
Никогда не говорит больше необходимого. Делает паузы перед ответом.

СЦЕНАРИЙ
{{user}} прибывает в офис {{char}}. Вечер. Дождь за окном. 
У них есть информация о пропаже — или может быть ОНИ САМИ и есть пропажа.

ПРАВИЛА
{{char}} никогда не врёт напрямую — но скрывает информацию.
Не утешает {{user}}. Не даёт лёгких ответов.
Сохраняет профессиональную дистанцию, пока не заслужат доверие со временем.`}
          />
          
          <h3 className="text-2xl font-bold text-purple-300 mb-4 mt-8">🗺️ Как прописать сюжет внутри инструкции</h3>
          <p className="text-lg leading-relaxed mb-4">
            Если ты делаешь РП-персонажа с конкретным сценарием, пропиши его в блоке <code className="text-purple-300">SCENARIO</code>. Здесь важно:
          </p>
          
          <div className="space-y-4 mb-6">
            <div>
              <h4 className="font-semibold text-purple-300 mb-2">Что указать:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                <li>Место и время действия</li>
                <li>Отправная точка — что произошло до начала диалога</li>
                <li>Роль <code className="text-purple-300">{'{{user}}'}</code> — кем он является в этой истории</li>
                <li>Начальное настроение сцены</li>
              </ul>
            </div>
          </div>
          
          <h4 className="font-semibold text-purple-300 mb-3">Как заложить конкретный сюжет в первые сообщения:</h4>
          <p className="text-lg leading-relaxed mb-4">
            Пропиши в <code className="text-purple-300">RULES</code> или <code className="text-purple-300">SCENARIO</code> прямую инструкцию для ИИ:
          </p>
          
          <CodeBlock language="text">
{`Start the RP with {{char}} noticing {{user}} for the first time. 
Do not reveal {{char}}'s suspicions immediately. 
Build tension gradually over the first few exchanges.`}
          </CodeBlock>
          
          <p className="text-lg leading-relaxed mt-4 mb-8">
            ИИ воспримет это как режиссёрскую пометку и будет следовать ей в начале чата.
          </p>
          
          <h3 className="text-2xl font-bold text-purple-300 mb-4">🎬 Сюжетные направления</h3>
          <p className="text-lg leading-relaxed mb-4">
            ИИ понимает ряд нарративных терминов, особенно на английском. Их можно использовать прямо в инструкции:
          </p>
          
          <div className="my-6">
            <Table
              headers={['Термин', 'Что означает', 'Пример использования']}
              rows={[
                ['<code>slowburn</code>', 'Медленное развитие отношений, напряжение без быстрой развязки', '<code>Relationship develops as slowburn</code><br/><span class="text-xs text-gray-400">Отношения развиваются медленно</span>'],
                ['<code>enemies to lovers</code>', 'От вражды к любви', '<code>Enemies to lovers dynamic</code><br/><span class="text-xs text-gray-400">Динамика "от врагов к любовникам"</span>'],
                ['<code>found family</code>', '«Обретённая семья» — близость без кровных связей', '<code>Treats {{user}} as found family</code><br/><span class="text-xs text-gray-400">Относится как к обретённой семье</span>'],
                ['<code>hurt/comfort</code>', 'Один ранен/в беде — другой помогает', '<code>h/c dynamic</code><br/><span class="text-xs text-gray-400">Динамика ранение/утешение</span>'],
                ['<code>conflict-driven</code>', 'История движется через конфликт', '<code>Keep tension high</code><br/><span class="text-xs text-gray-400">Поддерживай напряжение</span>'],
                ['<code>open ending</code>', 'Открытый финал, история не завершается', '<code>No fixed ending</code><br/><span class="text-xs text-gray-400">Нет фиксированного финала</span>']
              ]}
            />
          </div>
          
          <h3 className="text-2xl font-bold text-purple-300 mb-4 mt-8">👥 Как прописать NPC</h3>
          <p className="text-lg leading-relaxed mb-4">
            NPC (non-player characters) — это второстепенные персонажи, которые существуют в мире твоего бота, но не являются главным героем.
          </p>
          
          <BilingualCode
            language="text"
            english={`NPC: Mara — {{char}}'s informant. Appears rarely. Speaks in riddles. 
Knows more than she tells. {{char}} trusts her but owes her a favour.

NPC: The Chief — {{char}}'s former boss. Antagonistic. Corrupt. 
May appear if {{user}} asks about the department.`}
            russian={`NPC: Мара — информатор {{char}}. Появляется редко. Говорит загадками.
Знает больше, чем рассказывает. {{char}} доверяет ей, но должен услугу.

NPC: Шеф — бывший начальник {{char}}. Антагонистичен. Коррумпирован.
Может появиться, если {{user}} спросит об отделе.`}
          />
          
          <InfoBox type="warning" className="mt-6">
            <strong>Важно:</strong> не расписывай NPC слишком подробно — у тебя мало символов. 
            Дай ключевые черты: роль, отношение к <code className="text-purple-300">{'{{char}}'}</code>, одна-две особенности.
          </InfoBox>
          
          <h3 className="text-2xl font-bold text-purple-300 mb-4 mt-8">📝 Несколько правил хорошей инструкции:</h3>
          
          <div className="space-y-3">
            <div className="flex gap-3">
              <span className="text-green-400 text-xl">✅</span>
              <p className="text-gray-300">Пиши коротко и конкретно. Вместо «у неё очень красивые длинные шелковистые волосы цвета осеннего заката» — просто «long auburn hair».</p>
            </div>
            <div className="flex gap-3">
              <span className="text-green-400 text-xl">✅</span>
              <p className="text-gray-300">Используй <code className="text-purple-300">{'{{char}}'}</code> и <code className="text-purple-300">{'{{user}}'}</code> — это делает инструкцию универсальной и точной.</p>
            </div>
            <div className="flex gap-3">
              <span className="text-green-400 text-xl">✅</span>
              <p className="text-gray-300">Не повторяй то, что уже написал в описании — каждое поле для своего.</p>
            </div>
            <div className="flex gap-3">
              <span className="text-green-400 text-xl">✅</span>
              <p className="text-gray-300">Не повторяй то, что укажешь в тоне — ИИ считает тон отдельным важным сигналом.</p>
            </div>
            <div className="flex gap-3">
              <span className="text-green-400 text-xl">✅</span>
              <p className="text-gray-300">Структурируй блоками или заголовками — ИИ лучше считывает организованный текст.</p>
            </div>
            <div className="flex gap-3">
              <span className="text-red-400 text-xl">❌</span>
              <p className="text-gray-300">Не пиши в художественном стиле — это не история, а инструкция.</p>
            </div>
            <div className="flex gap-3">
              <span className="text-red-400 text-xl">❌</span>
              <p className="text-gray-300">Не используй /команды — они не работают.</p>
            </div>
            <div className="flex gap-3">
              <span className="text-red-400 text-xl">❌</span>
              <p className="text-gray-300">Не пиши за <code className="text-purple-300">{'{{user}}'}</code> — ИИ может начать управлять персонажем пользователя.</p>
            </div>
            <div className="flex gap-3">
              <span className="text-red-400 text-xl">❌</span>
              <p className="text-gray-300">
                Избегай отрицательных команд с частицей «не». ИИ часто отбрасывает «не» и делает наоборот. 
                <br/>
                <span className="text-sm text-red-300">Плохо: "Does not lie" → Лучше: "Always tells the truth"</span>
              </p>
            </div>
          </div>
        </>
      );

    case 8:
      return (
        <>
          <ImageBlock 
            src="./images/personality-tone.jpg"
            alt="Personality and Tone"
            caption="Тон персонажа — это его эмоциональный отпечаток"
          />
          
          <p className="text-lg leading-relaxed mb-4">
            Это маленькое поле с огромным влиянием.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            ИИ читает тон как <strong>отдельный, приоритетный сигнал</strong>. Именно потому, что поле небольшое и изолированное — 
            модель воспринимает его как чёткую, концентрированную установку. По сути, это «настройка личности» на уровне базовых импульсов.
          </p>
          
          <h3 className="text-2xl font-bold text-purple-300 mb-4">Как это использовать:</h3>
          <p className="text-lg leading-relaxed mb-6">
            Сюда идут <strong>самые яркие и специфические черты</strong> персонажа — особенно противоречивые. 
            Контрасты работают лучше всего, потому что они создают объём.
          </p>
          
          <h4 className="font-semibold text-purple-300 mb-3">Примеры:</h4>
          
          <div className="space-y-4 mb-8">
            <div>
              <CodeBlock language="text">
                Cold, observant, dry humor. Protective but never admits it. Speaks little — means everything.
              </CodeBlock>
              <p className="text-xs sm:text-sm text-gray-400 mt-2 italic px-2">
                🇷🇺 Холодный, наблюдательный, сухой юмор. Защищает, но никогда не признаётся. Говорит мало — имеет в виду всё.
              </p>
            </div>
            
            <div>
              <CodeBlock language="text">
                Chaotic, loud, surprisingly perceptive. Hides pain under jokes. Loyal to the bone.
              </CodeBlock>
              <p className="text-xs sm:text-sm text-gray-400 mt-2 italic px-2">
                🇷🇺 Хаотичный, громкий, удивительно проницательный. Прячет боль под шутками. Предан до костей.
              </p>
            </div>
            
            <div>
              <CodeBlock language="text">
                Gentle, patient, quietly firm. Cares deeply. Never pushes but never abandons.
              </CodeBlock>
              <p className="text-xs sm:text-sm text-gray-400 mt-2 italic px-2">
                🇷🇺 Нежный, терпеливый, тихо твёрдый. Глубоко заботится. Никогда не давит, но и никогда не бросает.
              </p>
            </div>
            
            <div>
              <CodeBlock language="text">
                Arrogant, brilliant, bored. Tests everyone. Secretly hungry for someone who can keep up.
              </CodeBlock>
              <p className="text-xs sm:text-sm text-gray-400 mt-2 italic px-2">
                🇷🇺 Высокомерный, блестящий, скучающий. Испытывает всех. Тайно жаждет того, кто сможет не отставать.
              </p>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-purple-300 mb-4">Чего не писать:</h3>
          
          <div className="space-y-3">
            <div className="flex gap-3">
              <span className="text-red-400 text-xl">❌</span>
              <p className="text-gray-300"><code>добрый персонаж</code> — слишком общо, ИИ не получит ничего конкретного</p>
            </div>
            <div className="flex gap-3">
              <span className="text-red-400 text-xl">❌</span>
              <p className="text-gray-300">Повторять то, что уже подробно расписано в инструкции — это трата символов</p>
            </div>
            <div className="flex gap-3">
              <span className="text-red-400 text-xl">❌</span>
              <p className="text-gray-300">Писать всё сразу (5+ черт без структуры) — лучше меньше, но точнее</p>
            </div>
          </div>
          
          <InfoBox type="tip" className="mt-6">
            <strong>Совет:</strong> напиши тон в последнюю очередь — когда уже готовы описание и инструкция. 
            Тогда ты точно знаешь, что самое важное, и не повторяешься.
          </InfoBox>
        </>
      );

    case 9:
      return (
        <>
          <p className="text-lg leading-relaxed mb-4">
            Это первое, что видит пользователь, когда открывает чат. И это последнее поле, которое работает как «постоянная память».
          </p>
          <p className="text-lg leading-relaxed mb-6">
            150 символов — это очень мало. Примерно 1-2 коротких предложения. Но именно это первое сообщение <strong>задаёт тон всего чата</strong>: 
            ИИ будет копировать его стиль, длину и оформление в последующих ответах.
          </p>
          
          <h3 className="text-2xl font-bold text-purple-300 mb-4">Три задачи первого сообщения:</h3>
          <ol className="list-decimal list-inside space-y-2 mb-6 text-gray-300">
            <li><strong>Показать стиль речи</strong> — как именно говорит персонаж</li>
            <li><strong>Задать атмосферу</strong> — где мы, что происходит</li>
            <li><strong>Дать пользователю точку входа</strong> — куда ответить, как вписаться</li>
          </ol>
          
          <h3 className="text-2xl font-bold text-purple-300 mb-4">Оформление: научи ИИ форматировать ответы</h3>
          <p className="text-lg leading-relaxed mb-4">
            Если хочешь, чтобы бот писал действия в звёздочках — напиши именно так:
          </p>
          
          <CodeBlock language="text">
{`*Виктор не поднял взгляда, когда дверь скрипнула. Пальцы лежали на старом деле.*
— Закрывайте дверь с той стороны. Или говорите зачем пришли.`}
          </CodeBlock>
          
          <p className="text-lg leading-relaxed my-4">
            Если хочешь описание в скобках:
          </p>
          
          <CodeBlock language="text">
{`(Она смотрела в окно, не оборачиваясь — как будто давно знала, что ты войдёшь.)
— Ты позже, чем я ожидала.`}
          </CodeBlock>
          
          <p className="text-lg leading-relaxed mt-4 mb-8">
            ИИ считывает это как образец и воспроизводит стиль.
          </p>
          
          <h3 className="text-2xl font-bold text-purple-300 mb-4">Важные правила:</h3>
          
          <InfoBox type="warning" className="mb-4">
            <strong>⚠️ Не пиши за пользователя.</strong> Если ты напишешь «ты вошёл и сел напротив», 
            ИИ может решить, что так и нужно — управлять действиями пользователя. Вместо этого:
            <div className="mt-3 space-y-2">
              <div className="flex gap-2">
                <span className="text-red-400">❌</span>
                <code className="text-sm">Ты вошёл в кабинет и сел.</code>
              </div>
              <div className="flex gap-2">
                <span className="text-green-400">✅</span>
                <code className="text-sm">*Он не предложил сесть — но второй стул стоял напротив, как будто ждал.*</code>
              </div>
            </div>
          </InfoBox>
          
          <InfoBox type="warning" className="mb-8">
            <strong>⚠️ Избегай указания пола пользователя</strong>, если твой персонаж может общаться с кем угодно:
            <div className="mt-3 space-y-2">
              <div className="flex gap-2">
                <span className="text-red-400">❌</span>
                <code className="text-sm">Он посмотрел на неё долгим взглядом.</code>
              </div>
              <div className="flex gap-2">
                <span className="text-green-400">✅</span>
                <code className="text-sm">Он посмотрел в твою сторону — долго, оценивающе.</code>
              </div>
            </div>
          </InfoBox>
          
          <h3 className="text-2xl font-bold text-green-400 mb-4">Примеры удачных первых сообщений:</h3>
          
          <div className="space-y-6">
            <div className="bg-slate-800/50 p-4 rounded-lg border-l-4 border-purple-500">
              <p className="text-sm text-purple-300 font-semibold mb-2">Детектив (мрачный):</p>
              <CodeBlock language="text">
{`*Дождь. Кабинет. Он и твоё дело на столе.*
— Слушаю.`}
              </CodeBlock>
            </div>
            
            <div className="bg-slate-800/50 p-4 rounded-lg border-l-4 border-purple-500">
              <p className="text-sm text-purple-300 font-semibold mb-2">Добрая подруга:</p>
              <CodeBlock language="text">
                — Привет. Ты сегодня как вообще? Серьёзно спрашиваю, не «нормально» принимается.
              </CodeBlock>
            </div>
            
            <div className="bg-slate-800/50 p-4 rounded-lg border-l-4 border-purple-500">
              <p className="text-sm text-purple-300 font-semibold mb-2">Злодей из аниме:</p>
              <CodeBlock language="text">
                *Он даже не обернулся.* — Ты пришёл позже, чем я рассчитывал. Это либо смелость, либо глупость.
              </CodeBlock>
            </div>
          </div>
        </>
      );

    case 10:
      return (
        <>
          <p className="text-lg leading-relaxed mb-6">
            Всё просто:
          </p>
          
          <div className="space-y-4">
            <div className="bg-slate-800/50 p-4 rounded-lg border-l-4 border-purple-500">
              <p className="font-semibold text-purple-300 mb-2">Публичный</p>
              <p className="text-gray-300">Персонаж появится в каталоге, его смогут найти другие пользователи</p>
            </div>
            
            <div className="bg-slate-800/50 p-4 rounded-lg border-l-4 border-purple-500">
              <p className="font-semibold text-purple-300 mb-2">Приватный</p>
              <p className="text-gray-300">Виден только тебе; удобно для тестов, черновиков или личного использования</p>
            </div>
          </div>
          
          <InfoBox type="tip" className="mt-6">
            <strong>Совет:</strong> Сначала сделай приватным, потести сам, убедись что всё работает — потом переключай на публичный. 
            Поменять можно в любой момент.
          </InfoBox>
        </>
      );

    case 11:
      return (
        <>
          <p className="text-lg leading-relaxed mb-4">
            Это один из самых важных навыков при создании персонажа. У тебя ограниченный бюджет символов, 
            и тратить его на повторения — значит терять возможности.
          </p>
          
          <VisualDivider icon="⚖️" />
          
          <h3 className="text-2xl font-bold text-purple-300 mb-4">Принцип прост: каждое поле — своя роль.</h3>
          
          <CodeBlock language="text">
{`ОПИСАНИЕ (500 символов)
└── Для пользователей
└── Зацепить, заинтересовать
└── Дать ощущение персонажа и атмосферы
└── Намекнуть на сеттинг или ситуацию

ИНСТРУКЦИЯ (2000 символов)
└── Для ИИ
└── Детали: внешность, характер, бэкстори, сценарий, NPC
└── Правила поведения
└── НЕ дублируй описание и тон

ТОН (100 символов)
└── Для ИИ
└── Самые яркие, контрастные черты
└── То, что не расписывалось подробно в инструкции

ПЕРВОЕ СООБЩЕНИЕ (150 символов)
└── Для пользователей и ИИ
└── Стиль речи, оформление, атмосфера
└── Точка входа в историю`}
          </CodeBlock>
          
          <h3 className="text-2xl font-bold text-purple-300 mb-4 mt-8">Алгоритм заполнения:</h3>
          
          <div className="space-y-4">
            <div className="bg-slate-800/50 p-4 rounded-lg">
              <p className="font-semibold text-purple-300 mb-2">Шаг 1.</p>
              <p className="text-gray-300">
                Напиши всё про персонажа свободно — на русском, без ограничений. Характер, внешность, история, ситуация, речь. 
                Просто всё, что знаешь.
              </p>
            </div>
            
            <div className="bg-slate-800/50 p-4 rounded-lg">
              <p className="font-semibold text-purple-300 mb-2">Шаг 2.</p>
              <p className="text-gray-300">
                Из этого выбери <strong>самое цепляющее</strong> — то, что заставит незнакомца захотеть открыть чат. 
                Это пойдёт в <strong>описание</strong>.
              </p>
            </div>
            
            <div className="bg-slate-800/50 p-4 rounded-lg">
              <p className="font-semibold text-purple-300 mb-2">Шаг 3.</p>
              <p className="text-gray-300">
                Остальное — детали, бэкстори, правила, сценарий — структурируй и сжимай для <strong>инструкции</strong>. 
                Проверяй: нет ли повторений с описанием?
              </p>
            </div>
            
            <div className="bg-slate-800/50 p-4 rounded-lg">
              <p className="font-semibold text-purple-300 mb-2">Шаг 4.</p>
              <p className="text-gray-300">
                Из характера выдели <strong>самые острые, специфические черты</strong> — особенно противоречия. 
                Это идёт в <strong>тон</strong>. Всё что туда попало — в инструкции не расписывай подробно.
              </p>
            </div>
            
            <div className="bg-slate-800/50 p-4 rounded-lg">
              <p className="font-semibold text-purple-300 mb-2">Шаг 5.</p>
              <p className="text-gray-300">
                Пиши <strong>первое сообщение</strong> как режиссёр: короткая живая сцена, в характере, с форматированием.
              </p>
            </div>
          </div>
        </>
      );

    case 12:
      return (
        <>
          <p className="text-lg leading-relaxed mb-6">
            Сюжеты во Frendi — это отдельная сущность, не путай их с тем, что ты прописываешь внутри инструкции персонажа. 
            Это похоже на «сценарий» в других платформах.
          </p>
          
          <h3 className="text-2xl font-bold text-purple-300 mb-4">Что такое Сюжет:</h3>
          <p className="text-lg leading-relaxed mb-4">
            Сюжет создаётся <strong>отдельно</strong> от персонажа и к нему можно прикрепить бота. У Сюжета есть два поля:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li><strong>Описание</strong> — 300 символов (видят пользователи)</li>
            <li><strong>Инструкция</strong> — 1000 символов (видит ИИ)</li>
          </ul>
          
          <h3 className="text-2xl font-bold text-purple-300 mb-4">Зачем это нужно:</h3>
          <p className="text-lg leading-relaxed mb-4">
            Сюжет — это способ <strong>расширить лимит символов</strong> для своего персонажа. Если ты хочешь детально прописать сеттинг, 
            правила мира, развитие событий или дополнительные сюжетные ветки — часть этой информации можно вынести именно сюда.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Всё, что прописано в Сюжете, попадает в <strong>постоянную память</strong> — ИИ будет это знать и учитывать наравне с инструкцией персонажа.
          </p>
          
          <h3 className="text-2xl font-bold text-purple-300 mb-4">Что писать в Сюжет:</h3>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
            <li>Подробное описание <strong>сеттинга</strong> (место, эпоха, правила мира)</li>
            <li><strong>Дополнительные сюжетные ветки</strong> — как история может развиваться в разных направлениях</li>
            <li><strong>Второстепенные детали</strong> — факты, которые делают мир живым, но не влезли в инструкцию</li>
            <li>Уточнения поведения ИИ в конкретных ситуациях</li>
            <li>Дополнительные <strong>NPC</strong> с деталями</li>
          </ul>
          
          <InfoBox type="warning" className="mb-6">
            <strong>Важный нюанс:</strong> Если ты делаешь персонажа <strong>для публики</strong>, помни: не все пользователи найдут и подключат сюжет. 
            Поэтому <strong>персонаж должен быть самодостаточным</strong> — работать полноценно и без него. Сюжет — это углубление, не обязательная основа.
          </InfoBox>
          
          <p className="text-lg leading-relaxed mb-4">
            Если сюжет специально создан под конкретного бота, укажи это в названии:
          </p>
          
          <div className="space-y-2 mb-6">
            <CodeBlock language="text">
              ✅ "Поместье Эверли" (сюжет к боту «Виктор Нарр»)
            </CodeBlock>
            <CodeBlock language="text">
              ✅ Академия Серой Луны | сюжет к серии ботов "Серая Луна"
            </CodeBlock>
          </div>
          
          <h3 className="text-2xl font-bold text-purple-300 mb-4">Схема: бот + сюжет</h3>
          
          <CodeBlock language="text">
{`[ПЕРСОНАЖ — основа]          [СЮЖЕТ — расширение]
Имя                          Описание сеттинга
Описание (для людей)    +    Дополнительные детали мира
Инструкция (ядро)            Сюжетные ветки
Тон                          Уточнения для ИИ
Первое сообщение`}
          </CodeBlock>
        </>
      );

    case 13:
      return (
        <>
          <InfoBox type="highlight" className="mb-6">
            <p className="text-lg text-center">
              <strong>Коротко: описание и первое сообщение — на русском, инструкция и тон — на английском.</strong>
            </p>
          </InfoBox>
          
          <p className="text-lg leading-relaxed mb-4">
            Почему? ИИ-модели обучены на огромном массиве английских текстов. Технические инструкции, теги, описания характеров — 
            всё это модель воспринимает точнее и «чище» именно на английском. Это не значит, что русский не работает вообще — 
            просто на английском точность выше.
          </p>
          <p className="text-lg leading-relaxed mb-8">
            А вот описание и первое сообщение пишем на русском, потому что <strong>их читают пользователи</strong> — 
            и им должно быть удобно и понятно.
          </p>
          
          <h3 className="text-2xl font-bold text-purple-300 mb-4">Как перевести инструкцию:</h3>
          
          <ol className="list-decimal list-inside space-y-3 mb-6 text-gray-300">
            <li>Напиши всю инструкцию на русском — сначала мысль, потом перевод</li>
            <li>Перейди в <strong>DeepSeek</strong> (приложение или сайт)</li>
            <li>Попроси: <em>«Переведи на английский язык, не теряя смысл и контекст. Уложись в 1950–1980 символов с учётом пробелов.»</em></li>
            <li>Проверь результат — иногда нужно немного подправить</li>
          </ol>
          
          <InfoBox type="info">
            Также можно воспользоваться{' '}
            <a 
              href="https://frendi.ai/chat/dcb15e92-989e-42d5-9c0f-2577bd81162b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-300 hover:text-purple-200 underline decoration-purple-400/50 hover:decoration-purple-300 transition-colors font-semibold"
            >
              ботом-ассистентом
            </a>
            {' '}прямо на Frendi — он поможет не только с переводом, но и с составлением самой инструкции.
          </InfoBox>
        </>
      );

    case 14:
      return (
        <>
          <p className="text-lg leading-relaxed mb-8">
            Это фундаментальное различие, которое влияет на то, сколько ты пишешь и что именно.
          </p>
          
          <h3 className="text-2xl font-bold text-purple-300 mb-4">👤 ОС (Original Character / авторский персонаж)</h3>
          
          <p className="text-lg leading-relaxed mb-4">
            ИИ <strong>ничего не знает</strong> о твоём персонаже. Буквально ноль. Ты придумал его — значит, 
            ты единственный источник информации о нём.
          </p>
          
          <div className="bg-slate-800/50 p-4 rounded-lg mb-6">
            <p className="font-semibold text-purple-300 mb-3">Что это значит:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Нужно прописать <strong>всё</strong>: внешность, характер, историю, речь, отношения</li>
              <li>Не надейся, что ИИ «додумает» — он додумает, но не так, как ты хочешь</li>
              <li>Каждая деталь, которую ты хочешь видеть в боте, должна быть явно указана</li>
            </ul>
          </div>
          
          <InfoBox type="tip" className="mb-8">
            <strong>Совет для ОС:</strong> Используй шаблонную структуру инструкции полностью. 
            Не пропускай блоки — лучше написать коротко, чем не написать вообще.
          </InfoBox>
          
          <h3 className="text-2xl font-bold text-purple-300 mb-4">🎌 Фандомный персонаж (из аниме, игры, книги, фильма)</h3>
          
          <p className="text-lg leading-relaxed mb-4">
            ИИ, скорее всего, <strong>уже знает</strong> этого персонажа — особенно если он популярный. 
            Снегг, Леви, Геральт, Дарт Вейдер — модель обучалась на огромном количестве текстов о них.
          </p>
          
          <div className="bg-slate-800/50 p-4 rounded-lg mb-6">
            <p className="font-semibold text-purple-300 mb-3">Что это значит:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Ты <strong>можешь не прописывать</strong> базовые вещи, которые ИИ итак знает: общий характер, внешность, историю</li>
              <li>Вместо этого сосредоточься на <strong>том, что важно для твоего конкретного сценария</strong>: отношения с пользователем, точка входа в историю, нюансы интерпретации</li>
              <li>Если ты хочешь <strong>AU (альтернативную вселенную)</strong> — явно укажи это и пропиши, что именно изменилось</li>
            </ul>
          </div>
          
          <h4 className="text-xl font-bold text-purple-300 mb-4">Шаблон для фандомного персонажа:</h4>
          
          <BilingualCode
            language="text"
            english={`OVERVIEW
{{char}} is [Name] from [Source]. Canon-compliant / AU: [describe AU if needed].

SCENARIO
[Situation where communication begins. What changed from canon, if AU.]

WITH {{USER}}
[Who {{user}} is in this story. How {{char}} treats them.]

KEY TRAITS TO EMPHASIZE
[Traits that are especially important for YOUR interpretation]

RULES
[What character does/doesn't do in YOUR scenario]`}
            russian={`ОБЗОР
{{char}} — это [Имя] из [Источник]. Канон / AU: [опишите AU если нужно].

СЦЕНАРИЙ
[Ситуация, в которой начинается общение. Что изменилось от канона, если AU.]

С {{USER}}
[Кем является {{user}} в этой истории. Как {{char}} к нему относится.]

КЛЮЧЕВЫЕ ЧЕРТЫ ДЛЯ АКЦЕНТА
[Черты, которые особенно важны для ТВОЕЙ интерпретации]

ПРАВИЛА
[Что делает/не делает персонаж в ТВОЁМ сценарии]`}
          />
          
          <InfoBox type="warning" className="mt-6 mb-8">
            <strong>Важный момент:</strong> Если персонаж малоизвестный или из нишевого фандома — пиши как для ОС. 
            Лучше переписать лишнее, чем получить персонажа, которого ИИ «придумал» сам.
          </InfoBox>
          
          <h3 className="text-2xl font-bold text-purple-300 mb-4">Таблица сравнения:</h3>
          
          <Table
            headers={['', 'ОС', 'Популярный фандом', 'Нишевый фандом']}
            rows={[
              ['<strong>Внешность</strong>', 'Прописывай всё', 'Можно кратко', 'Прописывай всё'],
              ['<strong>Характер</strong>', 'Прописывай всё', 'Акцент на нюансах', 'Прописывай всё'],
              ['<strong>История</strong>', 'Прописывай всё', 'Только AU-изменения', 'Прописывай всё'],
              ['<strong>Сценарий</strong>', 'Обязательно', 'Обязательно', 'Обязательно'],
              ['<strong>Объём инструкции</strong>', 'Максимальный', 'Средний', 'Максимальный']
            ]}
          />
        </>
      );

    case 15:
      return (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <FeatureCard 
              emoji="✅"
              title="Работает отлично"
              description="Переменные {{char}} и {{user}}, структурированные блоки, английский язык в инструкциях"
            />
            <FeatureCard 
              emoji="❌"
              title="Не работает"
              description="Команды /reset, скрипты, программирование жесткого поведения"
            />
          </div>
          
          <VisualDivider icon="🔍" />
          
          <h3 className="text-2xl font-bold text-green-400 mb-4">✅ Работает:</h3>
          
          <ul className="list-disc list-inside space-y-3 mb-8 text-gray-300">
            <li>
              <code className="text-purple-300">{'{{char}}'}</code> и <code className="text-purple-300">{'{{user}}'}</code> — переменные, которые Frendi понимает корректно
            </li>
            <li>
              Структурированные блоки с заголовками (<code className="text-purple-300">OVERVIEW</code>, <code className="text-purple-300">SPEECH</code> и т.д.)
            </li>
            <li>
              Английский язык в инструкции и тоне
            </li>
            <li>
              Нарративные теги: <Tooltip text="slowburn" translation="медленное развитие" />, <Tooltip text="enemies to lovers" translation="от врагов к любовникам" />, <Tooltip text="h/c" translation="hurt/comfort - ранение/утешение" />, <Tooltip text="found family" translation="обретённая семья" />
            </li>
            <li>
              Прямые инструкции поведения: <code className="text-purple-300 text-xs">Start with tension. Do not resolve it in the first exchange.</code>
              <br/>
              <span className="text-xs text-gray-400 ml-6">→ Начни с напряжения. Не разрешай его в первом же обмене.</span>
            </li>
            <li>
              Пример оформления в первом сообщении — ИИ копирует стиль
            </li>
            <li>
              Описание сценарных веток: <code className="text-purple-300 text-xs">If {'{{user}}'} mentions the war, {'{{char}}'} goes quiet</code>
              <br/>
              <span className="text-xs text-gray-400 ml-6">→ Если пользователь упоминает войну, персонаж замолкает</span>
            </li>
          </ul>
          
          <h3 className="text-2xl font-bold text-red-400 mb-4">❌ Не работает:</h3>
          
          <ul className="list-disc list-inside space-y-3 text-gray-300">
            <li><code className="text-red-300">/reset</code>, <code className="text-red-300">/stay</code>, <code className="text-red-300">/act as</code>, <code className="text-red-300">/jailbreak</code> — ИИ не распознаёт их как команды</li>
            <li>Скрипты и макросы в программистском смысле — платформа их не поддерживает</li>
            <li>Команды в стиле ChatGPT («Ты должен всегда...» в начале сообщения пользователя) — работает только то, что в постоянных полях</li>
            <li>Очень длинные художественные описания в инструкции — ИИ теряет суть в красивых словах</li>
            <li>Попытки «запрограммировать» жёсткое поведение через текст — ИИ может отступить от него в длинном чате</li>
          </ul>
        </>
      );

    case 16:
      return (
        <>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-red-400 mb-3">❌ Ошибка 1: Всё в одну кучу</h3>
              <p className="text-gray-300 mb-3">
                Написать описание, инструкцию, тон с одной и той же информацией разными словами.
              </p>
              <div className="bg-slate-800/50 p-4 rounded-lg mb-2">
                <p className="font-semibold text-red-300 mb-2">Почему плохо:</p>
                <p className="text-gray-300 text-sm">
                  Ты тратишь символы впустую, а ИИ получает одно и то же три раза вместо трёх разных типов информации.
                </p>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-lg">
                <p className="font-semibold text-green-300 mb-2">Как исправить:</p>
                <p className="text-gray-300 text-sm">
                  Используй принцип из раздела 11 — каждое поле для своей задачи.
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-red-400 mb-3">❌ Ошибка 2: Художественный текст в инструкции</h3>
              <CodeBlock language="text">
{`❌ Её волосы цвета осеннего заката струились по плечам, 
   и в глазах горел огонь непокорённой души...`}
              </CodeBlock>
              <div className="bg-slate-800/50 p-4 rounded-lg mt-3 mb-2">
                <p className="font-semibold text-red-300 mb-2">Почему плохо:</p>
                <p className="text-gray-300 text-sm">
                  ИИ может воспроизвести этот стиль как свой, а не как описание персонажа.
                </p>
              </div>
              <CodeBlock language="text">
{`✅ Hair: auburn, long, loose. Eyes: dark green, sharp. 
   Expression: often unreadable.`}
              </CodeBlock>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-red-400 mb-3">❌ Ошибка 3: Писать за пользователя</h3>
              <CodeBlock language="text">
{`❌ *Ты вошёл в зал и остановился у двери.*
   — Привет, — сказал ты.`}
              </CodeBlock>
              <div className="bg-slate-800/50 p-4 rounded-lg mt-3 mb-2">
                <p className="font-semibold text-red-300 mb-2">Почему плохо:</p>
                <p className="text-gray-300 text-sm">
                  ИИ поймёт это как пример того, что можно управлять действиями пользователя. Чат превратится в монолог бота.
                </p>
              </div>
              <CodeBlock language="text">
{`✅ *Он поднял взгляд, когда скрипнула дверь.*
   — Не думал, что придёшь.`}
              </CodeBlock>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-red-400 mb-3">❌ Ошибка 4: Слишком общий тон</h3>
              <CodeBlock language="text">
                ❌ добрый, умный, весёлый
              </CodeBlock>
              <div className="bg-slate-800/50 p-4 rounded-lg mt-3 mb-2">
                <p className="font-semibold text-red-300 mb-2">Почему плохо:</p>
                <p className="text-gray-300 text-sm">
                  Это описание подходит для половины персонажей на платформе. ИИ не получает ничего конкретного.
                </p>
              </div>
              <CodeBlock language="text">
{`✅ Chaotic warmth, overshares then panics about it. 
   Aggressively supportive. Terrible at goodbyes.`}
              </CodeBlock>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-red-400 mb-3">❌ Ошибка 5: Игнорировать первое сообщение</h3>
              <p className="text-gray-300 mb-3">
                Написать «Привет, я Виктор» и считать, что этого достаточно.
              </p>
              <div className="bg-slate-800/50 p-4 rounded-lg">
                <p className="font-semibold text-red-300 mb-2">Почему плохо:</p>
                <p className="text-gray-300 text-sm">
                  Первое сообщение задаёт тон всего чата. Если оно плоское — чат будет плоским.
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-red-400 mb-3">❌ Ошибка 6: Не тестировать перед публикацией</h3>
              <p className="text-gray-300 mb-3">
                Создал → опубликовал → удивился что бот ведёт себя странно.
              </p>
              <div className="bg-slate-800/50 p-4 rounded-lg">
                <p className="font-semibold text-green-300 mb-2">Как исправить:</p>
                <p className="text-gray-300 text-sm">
                  Сначала ставь приватный режим, тестируй сам, проверяй разные сценарии — потом публикуй.
                </p>
              </div>
            </div>
          </div>
        </>
      );

    case 17:
      return (
        <>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-purple-300 mb-4">
                💡 Используй{' '}
                <a 
                  href="https://frendi.ai/chat/dcb15e92-989e-42d5-9c0f-2577bd81162b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 underline decoration-purple-500/50 hover:decoration-purple-400 transition-colors"
                >
                  бота-ассистента
                </a>
                {' '}на Frendi
              </h3>
              <p className="text-lg leading-relaxed mb-3">
                На Frendi есть специальный{' '}
                <a 
                  href="https://frendi.ai/chat/dcb15e92-989e-42d5-9c0f-2577bd81162b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 underline decoration-purple-500/50 hover:decoration-purple-400 transition-colors font-semibold"
                >
                  Ассистент LLM | AI | RP
                </a>
                , который умеет:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Помочь придумать концепцию персонажа</li>
                <li>Составить структуру инструкции</li>
                <li>Дать советы по инструкциям для ИИ</li>
                <li>Перевести текст на английский с сохранением смысла</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-purple-300 mb-4">💡 Прописывай несколько сюжетных веток</h3>
              <p className="text-lg leading-relaxed mb-4">
                Если у тебя РП-персонаж с историей, укажи в инструкции развилки. Для примера:
              </p>
              <BilingualCode
                language="text"
                english={`If {{user}} chooses to trust {{char}}: relationship warms slowly over time.
If {{user}} is hostile: {{char}} becomes more guarded and formal.
If {{user}} mentions [key event]: {{char}} reacts with visible discomfort.`}
                russian={`Если {{user}} решает доверять {{char}}: отношения теплеют медленно со временем.
Если {{user}} враждебен: {{char}} становится более закрытым и формальным.
Если {{user}} упоминает [ключевое событие]: {{char}} реагирует с видимым дискомфортом.`}
              />
              <p className="text-lg leading-relaxed mt-4">
                ИИ будет адаптировать поведение под выборы пользователя.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-purple-300 mb-4">💡 Серия ботов</h3>
              <p className="text-lg leading-relaxed mb-3">
                Если ты делаешь нескольких персонажей в одном мире:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Создай общий Сюжет с описанием мира</li>
                <li>В инструкции каждого бота укажи знание о других персонажах (кратко)</li>
                <li>В названии сюжета укажи, к какой серии он относится</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-purple-300 mb-4">💡 С чего начинать, если ты совсем новый</h3>
              <p className="text-lg leading-relaxed">
                Не начинай с серии и не начинай со сложного многослойного персонажа. Сделай одного простого бота — одна роль, 
                чёткий характер, конкретная ситуация. Поработай с ним, пойми как ИИ реагирует на твои инструкции, 
                поэкспериментируй с тоном и первым сообщением. Потом бери сложнее.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-purple-300 mb-4">💡 Проверяй длину</h3>
              <p className="text-lg leading-relaxed">
                Перед тем как копировать текст в поля — проверь количество символов. Удобно делать это в любом онлайн-счётчике 
                символов или прямо в телефонных заметках. Превышение лимита = часть инструкции просто обрежется.
              </p>
            </div>
          </div>
        </>
      );

    default:
      return <p>Контент не найден</p>;
  }
}
