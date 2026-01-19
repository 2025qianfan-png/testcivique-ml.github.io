const questionsTenYears = [
  // ==================== Mises en situation (十年卡) ====================
  {
    category: "Mises en situation",
    type: "concept",
    question: "Madame X a une entreprise de logistique. Madame Y, qui a des difficultés de mobilité, vient postuler. Que peut faire Madame X ?",
    options: [
      "Madame X peut la refuser directement à cause de son handicap",
      "Madame X doit lui faire passer l'entretien comme pour un candidat valide",
      "Madame X doit l'embaucher immédiatement",
      "Madame Y ne devrait pas venir passer l'entretien"
    ],
    answer: 1,
    explanation: "FR : Correct ! Tous les candidats doivent être traités de manière égale. 中：正确！所有候选人都应被平等对待，包括面试机会。"
  },
  {
    category: "Mises en situation",
    type: "concept",
    question: "Monsieur X publie une critique du gouvernement sur Facebook. Que dit la liberté d'expression ?",
    options: [
      "Il peut en parler seulement avec sa famille, pas sur Internet",
      "Il doit uniquement dire du bien du gouvernement",
      "Il peut exprimer son opinion tant qu'il respecte la loi",
      "Il n'a pas le droit de parler de politique"
    ],
    answer: 2,
    explanation: "FR : Correct ! La liberté d'expression s'exerce dans le respect des lois et des autres. 中：正确。言论自由是在遵守法律和尊重他人的前提下表达观点。"
  },
  {
    category: "Mises en situation",
    type: "concept",
    question: "Un homme peut-il avoir plusieurs épouses en France ?",
    options: [
      "C'est interdit",
      "C'est possible",
      "C'est autorisé pour certaines religions",
      "C'est décidé par le ministre"
    ],
    answer: 0,
    explanation: "FR : Correct ! La polygamie est strictement interdite en France pour tous, quelle que soit la religion ou la culture. Le mariage doit être monogame. 中：正确。法国严格禁止一夫多妻制，不论宗教或文化背景如何，婚姻必须是一夫一妻制。"
  },
  {
    category: "Mises en situation",
    type: "concept",
    question: "La répudiation de sa femme est :",
    options: [
      "Légale",
      "Interdite",
      "Autorisée seulement pour certaines religions",
      "Facultative"
    ],
    answer: 1,
    explanation: "FR : Correct ! On ne peut pas répudier sa femme comme dans certaines traditions anciennes. La loi protège le mariage et les droits de chacun. 中：正确。在法国，不能像某些古老传统那样随意休妻。法律保护婚姻及每个人的权利。"
  },
  {
    category: "Mises en situation",
    type: "concept",
    question: "Que peut faire un usager du service public dans une mairie ?",
    options: [
      "Demander un document administratif",
      "Organiser un événement religieux",
      "Imposer sa religion",
      "Modifier la loi"
    ],
    answer: 0,
    explanation: "FR : Correct ! Les usagers des services publics, comme dans une mairie, peuvent effectuer des démarches administratives : demander une carte d'identité, un passeport, un acte de naissance, ou tout autre document officiel. Cela relève de leurs droits civiques et de l'accès aux services publics. 中：正确。公共服务的使用者（如市政厅）可以办理行政事务：申请身份证、护照、出生证明或其他官方文件。这属于公民权利和公共服务的基本保障。"
  },
  {
    category: "Mises en situation",
    type: "concept",
    question: "Madame X et Monsieur Y occupent des postes similaires dans la même entreprise. Laquelle des situations suivantes n'est pas conforme au principe d'égalité ?",
    options: [
      "Monsieur Y perçoit un salaire plus élevé que Madame X en raison d'une expérience professionnelle plus importante.",
      "Bien que Madame X soit en situation de handicap, elle bénéficie des mêmes conditions de travail et de traitement que Monsieur Y.",
      "Le congé maternité de Madame X est plus long que le congé de Monsieur Y.",
      "Le salaire de Madame X est réduit en raison de ses opinions politiques différentes de celles de son employeur"
    ],
    answer: 3,
    explanation: "FR : Correct ! Réduire le salaire d'une personne pour ses opinions politiques constitue une discrimination, ce qui est contraire au principe d'égalité. 中：正确。因政治观点不同而降低工资属于歧视行为，违反平等原则。"
  },
  {
    category: "Mises en situation",
    type: "concept",
    question: "Monsieur Y se rend à la préfecture pour effectuer une démarche concernant son permis de conduire. Il souhaite être reçu par un agent qui partage la religion bouddhiste afin d'échanger avec lui. Laquelle des propositions suivantes est correcte ?",
    options: [
      "Il a le droit de choisir, car il est possible de discuter librement de sa religion dans un service public.",
      "Il n'a pas le droit de choisir, car la religion ne peut pas être prise en compte dans un service public.",
      "Seuls les agents peuvent le choisir, car eux seuls ont le droit d'exprimer et de discuter de leur religion.",
      "Les agents ne peuvent pas le choisir, car ils n'ont pas le droit de discuter de religion dans l'exercice de leurs fonctions."
    ],
    answer: 1,
    explanation: "FR : Correct ! Le principe de neutralité impose que les usagers soient traités de manière égale, indépendamment de leur religion ou de celle de l'agent. 中：正确。中立原则要求服务对象不受自己或工作人员宗教信仰的影响，每个人都应平等对待。"
  },
  {
    category: "Mises en situation",
    type: "concept",
    question: "Madame X a organisé une activité terroriste au nom de la liberté de réunion. Que dit la loi ?",
    options: [
      "C'est autorisé",
      "C'est interdit",
      "C'est toléré si personne n'est blessé",
      "C'est seulement interdit si l'État l'interdit formellement"
    ],
    answer: 1,
    explanation: "FR : Correct. Toute activité terroriste est strictement interdite par la loi, quelle que soit la justification invoquée. 中：正确。任何恐怖主义活动都被法律严格禁止，不论以何种理由进行。"
  },
  {
    category: "Mises en situation",
    type: "concept",
    question: "Madame X veut organiser un événement religieux à la mairie. Que peut-elle faire ?",
    options: [
      "Elle peut organiser librement son événement religieux dans la mairie",
      "Elle ne peut pas organiser d'événement religieux dans la mairie",
      "Elle peut organiser l'événement uniquement si la mairie appartient à sa religion",
      "Elle peut organiser l'événement seulement si elle paie un droit spécial"
    ],
    answer: 1,
    explanation: "FR : Correct. Les événements religieux ne peuvent pas être organisés dans un lieu de service public. 中：正确。宗教活动不得在公共服务场所组织举行。"
  },
  {
    category: "Mises en situation",
    type: "concept",
    question: "Madame X est enseignante dans un collège public. Elle souhaite faire la promotion de sa religion auprès des élèves. Que dit la loi ?",
    options: [
      "Elle peut le faire librement pendant les cours",
      "Elle ne peut pas promouvoir sa religion auprès des élèves",
      "Elle peut le faire seulement avec l'autorisation des parents",
      "Elle peut le faire mais uniquement en dehors de l'établissement"
    ],
    answer: 1,
    explanation: "FR : Correct. La neutralité du service public interdit toute promotion religieuse par un enseignant dans un établissement public. 中：正确。公共服务中立原则禁止教师在公立学校宣传宗教。"
  },
  {
    category: "Mises en situation",
    type: "concept",
    question: "Un élève veut pratiquer sa religion en dehors des cours. Il peut :",
    options: [
      "Oui, librement",
      "Non",
      "Seulement si les enseignants le permettent",
      "Seulement les jours fériés"
    ],
    answer: 0,
    explanation: "FR : Correct. Hors des heures de cours, un élève peut pratiquer sa religion dans le respect des règles de l'établissement. 中：正确。在课外时间，学生可以自由进行宗教活动，但需遵守学校规定。"
  },
  {
    category: "Mises en situation",
    type: "concept",
    question: "Un citoyen critique une décision politique dans un journal. Il agit :",
    options: [
      "Illégalement",
      "Dans le cadre de la liberté d'expression",
      "Contre la Constitution",
      "Contre la démocratie"
    ],
    answer: 1,
    explanation: "FR : Correct. La liberté d'expression permet de critiquer les décisions politiques. 中：正确。言论自由允许对政治决定进行批评。"
  },
  {
    category: "Mises en situation",
    type: "concept",
    question: "Un élève est traité différemment à cause de son origine. Cela viole :",
    options: [
      "L'égalité",
      "La fraternité",
      "La neutralité",
      "La tradition"
    ],
    answer: 0,
    explanation: "FR : Correct. Traiter un élève différemment en raison de son origine constitue une violation de l'égalité. 中：正确。因出身而区别对待学生违反平等原则。"
  },

  // ==================== Laïcité (十年卡) ====================
  {
    category: "Laïcité",
    type: "concept",
    question: "Concernant la pratique de la religion, quelle proposition est correcte ?",
    options: [
      "Il est interdit d'exprimer ses convictions religieuses en public",
      "Chacun peut pratiquer la religion de son choix ou ne pas en pratiquer",
      "Tout le monde doit pratiquer la même religion",
      "La famille doit avoir la même religion"
    ],
    answer: 1,
    explanation: "FR : Correct ! La laïcité et la liberté de conscience garantissent le droit de croire, de ne pas croire, ou de choisir sa religion librement, sans contrainte de l'État ou de la famille. 中：正确。世俗原则和良心自由保障每个人有权信仰、无信仰，或自由选择自己的宗教，不受国家或家庭强制。"
  },
  {
    category: "Laïcité",
    type: "concept",
    question: "Quel droit est garanti par la laïcité ?",
    options: [
      "Liberté de conscience et de ne pas adhérer à une religion",
      "Ne pas payer d'impôts",
      "Travailler moins",
      "Ne pas respecter la loi"
    ],
    answer: 0,
    explanation: "FR : Correct ! La laïcité garantit à chaque personne la liberté de croire ou de ne pas croire, et assure la neutralité de l'État vis-à-vis des religions. Cela signifie que chacun peut pratiquer sa religion librement, ou choisir de ne pas en avoir, sans subir de pression ou de discrimination. 中：正确。世俗原则保障每个人有信仰或不信仰的自由，并确保国家对宗教保持中立。这意味着每个人可以自由地信仰宗教，也可以选择不信仰，而不受到任何压力或歧视。"
  },
  {
    category: "Laïcité",
    type: "concept",
    question: "Qu'est ce qui est interdit par la Charte de la laïcité à l'école ?",
    options: [
      "Porter des signes religieux très visibles",
      "Apprendre à lire",
      "Faire du sport",
      "Manger à la cantine"
    ],
    answer: 0,
    explanation: "FR : Correct ! La Charte de la laïcité à l'école interdit aux élèves de porter des signes religieux ostensibles (comme le voile, la kippa ou de grandes croix) afin de préserver la neutralité de l'école et le respect de la liberté de conscience de tous les élèves. 中：正确。学校世俗宪章禁止学生佩戴明显宗教标志（如头巾、小圆帽或大十字架），以维护学校中立，并尊重所有学生的信仰自由。"
  },
  {
    category: "Laïcité",
    type: "concept",
    question: "En application de la laïcité, que doit respecter un agent public ?",
    options: [
      "Porter ses convictions religieuses",
      "Être neutre vis-à-vis des usagers",
      "Faire la promotion d'une religion",
      "Imposer sa religion"
    ],
    answer: 1,
    explanation: "FR : Correct ! La laïcité impose aux agents publics d'être neutres envers les usagers : ils doivent traiter chacun de manière égale, sans favoritisme ni discrimination liée à la religion. 中：正确。世俗原则要求公职人员对服务对象保持中立：平等对待每个人，不因宗教信仰偏袒或歧视任何人。"
  },
  {
    category: "Laïcité",
    type: "concept",
    question: "La neutralité de l'État selon la laïcité signifie :",
    options: [
      "L'État favorise financièrement uniquement les religions qui lui donnent de l'argent",
      "L'État ne reçoit ni ne donne de l'argent à aucune religion",
      "L'État choisit quelle religion soutenir selon sa popularité",
      "L'État peut subventionner certaines religions si elles sont très anciennes"
    ],
    answer: 1,
    explanation: "FR : Correct. La laïcité impose que l'État ne finance ni ne soutienne financièrement aucune religion. 中：正确。世俗原则要求国家不资助任何宗教，也不接受宗教资金。"
  },
  {
    category: "Laïcité",
    type: "concept",
    question: "La neutralité religieuse de l'État implique :",
    options: [
      "L'absence de croyance",
      "L'impartialité",
      "L'interdiction des religions",
      "L'obligation de croire"
    ],
    answer: 1,
    explanation: "FR : Correct. La neutralité religieuse signifie que l'État doit être impartial envers toutes les religions. 中：正确。宗教中立意味着国家对所有宗教保持公正、不偏袒。"
  },

  // ==================== Devise et symboles (十年卡) ====================
  {
    category: "Devise et symboles",
    type: "concept",
    question: "À quoi correspond la date du 14 juillet ?",
    options: [
      "Le début de la Révolution française en 1789",
      "L'adoption de la Déclaration des droits de l'homme et du citoyen en 1789",
      "La proclamation de la Première République française en 1792",
      "La fin de la Révolution française en 1799"
    ],
    answer: 0,
    explanation: "FR : Exact ! La prise de la Bastille le 14 juillet 1789 marque le début de la Révolution française. 中：正确！1789年7月14日攻占巴士底狱，标志法国大革命开始。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "Où peut-on voir la devise de la République ?",
    options: [
      "Sur les actes de naissance",
      "Sur les tickets de caisse des magasins",
      "Sur les affiches publicitaires privées",
      "Dans les bulletins de vote des élections uniquement"
    ],
    answer: 0,
    explanation: "FR : Correct ! La devise figure sur certains documents officiels comme les actes de naissance. 中：正确。共和国格言出现在一些官方文件上，如出生证明。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "Que signifie la liberté ?",
    options: [
      "Peut insulter des inconnus",
      "Peut exprimer ses idées à haute voix dans la rue",
      "Peut publier tout sur les réseaux sociaux",
      "Peut exprimer ses opinions dans le respect de la loi"
    ],
    answer: 3,
    explanation: "FR : Correct ! La liberté existe dans le respect des règles. 中：正确。自由是在法律允许范围内表达观点。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "Que signifie la liberté ?",
    options: [
      "Tout le monde est égal",
      "Nous devons aider les autres",
      "Nous pouvons faire ce que nous voulons sans tenir compte des autres",
      "Nous pouvons faire ce que nous voulons tant que cela ne nuit pas aux autres et respecte la loi"
    ],
    answer: 3,
    explanation: "FR : Correct ! C'est la définition de la liberté en République. 中：正确。自由是在尊重法律和他人的前提下。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "La liberté de circulation permet à toute personne de :",
    options: [
      "Se déplacer librement sur le territoire",
      "Choisir ses impôts",
      "S'absenter de l'école",
      "Voyager uniquement à l'étranger"
    ],
    answer: 0,
    explanation: "FR : Correct ! La liberté de circulation garantit à toute personne le droit de se déplacer librement sur le territoire français, que ce soit pour travailler, étudier ou se rendre dans un autre lieu. 中：正确。行动自由保障每个人在法国境内自由移动的权利，无论是工作、学习还是前往其他地方。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "Complétez ces paroles de la Marseillaise : \"Aux armes [...] ! Formez vos bataillons\"",
    options: [
      "Citoyens",
      "Patriotes",
      "Soldats",
      "Français"
    ],
    answer: 0,
    explanation: "FR : Correct ! Le refrain célèbre l'engagement des citoyens pour défendre la patrie et former les bataillons révolutionnaires. 中：正确。这句歌词呼吁公民团结起来保卫祖国，并组建革命队伍。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "Complétez les paroles de la Marseillaise : \"Allons enfants de la patrie [...]\"",
    options: [
      "Le jour de gloire est arrivé",
      "Chantons ensemble",
      "À la victoire",
      "Ensemble pour la France"
    ],
    answer: 0,
    explanation: "FR : Correct ! Cette phrase emblématique est le début du refrain et symbolise l'appel à la défense de la nation et à la victoire. 中：正确。这句经典歌词是副歌的开头，象征呼吁保卫国家和争取胜利。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "Les impôts permettent de financer les dépenses publiques. Quelle proposition est correcte ?",
    options: [
      "Ils servent à financer les services publics",
      "Ils servent uniquement à payer les fonctionnaires",
      "Ils sont facultatifs",
      "Ils financent seulement l'armée"
    ],
    answer: 0,
    explanation: "FR : Correct ! Les impôts permettent de financer l'éducation, la santé, la sécurité, les routes et d'autres services essentiels pour la société. 中：正确。税收用于资助教育、医疗、安全、道路等社会必需服务。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "Les impôts permettent de financer les dépenses publiques. Quelle proposition est correcte ?",
    options: [
      "C'est une manifestation de la fraternité",
      "C'est une manifestation de l'égalité",
      "C'est une manifestation de la liberté",
      "C'est une manifestation de la monarchie"
    ],
    answer: 0,
    explanation: "FR : Correct ! En contribuant aux impôts, chacun participe à la solidarité nationale : l'argent sert à aider ceux qui en ont besoin et à financer les services pour tous. 中：正确。缴税体现了博爱精神：每个人都为国家的团结作贡献，税款用于帮助有需要的人和资助公共服务。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "Quelle est la couleur du bonnet porté par Marianne sur certains timbres ?",
    options: [
      "Bleu",
      "Rouge",
      "Blanc",
      "Vert"
    ],
    answer: 1,
    explanation: "FR : Correct ! Sur de nombreux timbres et représentations officielles, Marianne porte un bonnet phrygien rouge, symbole de la liberté et de la Révolution française. 中：正确。在许多邮票和官方形象中，玛丽安佩戴红色的自由帽，象征自由和法国大革命精神。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "Dans une démocratie, tous les citoyens :",
    options: [
      "Ont les mêmes droits",
      "Ont le même revenu",
      "Peuvent imposer leurs idées",
      "Sont soumis à une religion obligatoire"
    ],
    answer: 0,
    explanation: "FR : Correct ! Dans une démocratie, tous les citoyens sont égaux devant la loi et disposent des mêmes droits fondamentaux, indépendamment de leur richesse, religion ou statut social. 中：正确。在民主国家，所有公民在法律面前平等，享有相同的基本权利，与财富、宗教或社会地位无关。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "Les impôts servent à :",
    options: [
      "Financer les services publics",
      "Financer seulement les fonctionnaires",
      "Financer seulement l'armée",
      "Ne sont pas obligatoires"
    ],
    answer: 0,
    explanation: "FR : Correct. Les impôts permettent de financer les services publics et les dépenses de l'État. 中：正确。税收用于资助公共服务和国家支出。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "Pour protéger les citoyens contre les discriminations, l'État :",
    options: [
      "Encourage que les hommes et les femmes aient des salaires différents",
      "Sanctionne les actes de discrimination",
      "Ne fait rien",
      "Favorise certaines personnes selon leur origine"
    ],
    answer: 1,
    explanation: "FR : Correct. L'État sanctionne les discriminations pour protéger l'égalité des citoyens. 中：正确。国家对歧视行为进行处罚，以保护公民平等权利。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "La République est dite « sociale » car elle :",
    options: [
      "Favorise une classe",
      "Protège les plus fragiles",
      "Interdit le travail",
      "Supprime les impôts"
    ],
    answer: 1,
    explanation: "FR : Correct. La République dite sociale vise à protéger les personnes les plus vulnérables. 中：正确。社会共和国旨在保护最脆弱的人群。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "La liberté d'opinion est :",
    options: [
      "Interdite",
      "Garantie",
      "Réservée aux adultes",
      "Soumise à autorisation"
    ],
    answer: 1,
    explanation: "FR : Correct. La liberté d'opinion est garantie par la loi. 中：正确。观点自由受法律保障。"
  }
];