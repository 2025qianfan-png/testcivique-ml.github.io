const questionsFourYears = [
  // ==================== Mises en situation ====================
  {
    category: "Mises en situation",
    type: "concept",
    question: "A-t-on le droit d'insulter publiquement quelqu'un parce qu'il est différent (handicap, apparence physique, sexe...) ?",
    options: [
      "Oui, dans certaines situations",
      "Non, dans aucun cas",
      "Oui, avec le consentement des autres",
      "Non, en métropole française"
    ],
    answer: 1,
    explanation: "FR : Correct ! Insulter quelqu'un publiquement pour ce type de raison est interdit par la loi. 中：正确！因为残疾、外貌或性别等原因公开侮辱他人，在任何情况下都是违法的。"
  },
  {
    category: "Mises en situation",
    type: "concept",
    question: "A-t-on le droit d'insulter publiquement quelqu'un parce qu'il est différent (handicap, apparence physique, sexe...) ?",
    options: [
      "Non interdit par la loi",
      "Parfois autorisé",
      "Autorisé en ligne, interdit dans la vie réelle",
      "Autorisé en famille"
    ],
    answer: 0,
    explanation: "FR : Correct ! L'insulte publique discriminatoire est interdite par la loi. 中：正确！歧视性的公开侮辱行为是法律明确禁止的。"
  },
  {
    category: "Mises en situation",
    type: "concept",
    question: "Un enfant peut-il refuser d'aller à l'école pour une raison religieuse ?",
    options: [
      "Oui, toujours",
      "Non",
      "Seulement si ses parents sont d'accord",
      "Seulement à partir de 16 ans"
    ],
    answer: 1,
    explanation: "FR : Correct ! L'école publique est obligatoire et neutre sur le plan religieux. Les enfants doivent y aller, indépendamment de leurs croyances ou de celles de leurs parents. 中：正确。公立学校是义务教育，并且宗教中立，儿童必须上学，无论他们或父母的信仰如何。"
  },
  {
    category: "Mises en situation",
    type: "concept",
    question: "Une mère refuse actuellement que sa fille de 8 ans participe au cours de sport parce qu'il y a des garçons. Que dit la loi ?",
    options: [
      "C'est interdit dans une école publique",
      "C'est possible si l'enseignant est d'accord",
      "C'est toujours interdit dans toutes les écoles",
      "C'est autorisé seulement à l'école privée"
    ],
    answer: 0,
    explanation: "FR : Correct ! Dans les écoles publiques, l'égalité entre filles et garçons doit être respectée. On ne peut pas exclure un enfant d'une activité en raison de son sexe ou de la présence de l'autre sexe. 中：正确。在公立学校，男女平等必须得到尊重。不能因为孩子的性别或其他性别的存在而让孩子缺席某项活动。"
  },
  {
    category: "Mises en situation",
    type: "concept",
    question: "Une personne a-t-elle le droit de ne pas croire en une religion ?",
    options: [
      "Non",
      "Oui",
      "Seulement à l'âge adulte",
      "Seulement si elle est fonctionnaire"
    ],
    answer: 1,
    explanation: "FR : Correct ! En France, chacun peut choisir de ne pas adhérer à une religion. Cette liberté est protégée par la Constitution et par le principe de laïcité. 中：正确。在法国，每个人都可以选择不信仰任何宗教。这一自由受到宪法和世俗原则的保护。"
  },
  {
    category: "Mises en situation",
    type: "concept",
    question: "En tant que parent, peut-on refuser que son enfant participe aux cours de sport à l'école car ils sont mixtes ?",
    options: [
      "Oui, toujours",
      "Non",
      "Oui, si l'école est d'accord",
      "Oui, seulement à l'âge de 10 ans"
    ],
    answer: 1,
    explanation: "FR : Correct ! Les parents ne peuvent pas refuser la participation de leur enfant à des activités mixtes dans les écoles publiques. Tous les élèves doivent être traités de manière équitable. 中：正确。父母不能拒绝孩子参加公立学校的混合活动。所有学生都必须受到平等对待。"
  },
  {
    category: "Mises en situation",
    type: "concept",
    question: "Peut-on brûler publiquement un drapeau français ?",
    options: [
      "Oui",
      "Non",
      "Oui, seulement dans certaines régions",
      "Oui, si on est citoyen"
    ],
    answer: 1,
    explanation: "FR : Correct ! La loi française protège les symboles nationaux, dont le drapeau, et interdit de les dégrader ou de les brûler publiquement. 中：正确。法国法律保护国家象征，包括国旗，禁止公开破坏或焚烧国旗。"
  },
  {
    category: "Mises en situation",
    type: "concept",
    question: "Madame X et Madame Y sont des étrangères résidant en France. Elles souhaitent créer une association d'aide aux étrangers.",
    options: [
      "Elles peuvent la créer, mais doivent la déclarer à la préfecture",
      "Elles ne peuvent pas créer d'association parce qu'elles ne sont pas de nationalité française.",
      "Elles peuvent créer une association, mais seulement après avoir adhéré à une autre association.",
      "Elles peuvent créer librement une association, sans condition de nationalité particulière."
    ],
    answer: 0,
    explanation: "FR : Correct ! En France, toute personne, française ou étrangère résidant légalement, peut créer une association. Selon la loi de 1901, la plupart des associations doivent être déclarées à la préfecture pour obtenir la personnalité juridique et la capacité de recevoir des subventions ou de gérer un compte bancaire. 中：正确。在法国，任何合法居留的人员，无论国籍，都可以创建协会。根据1901年的法律，大多数协会需向省政府（préfecture）登记，以获得法人资格，并能够接受补助或开设银行账户。"
  },
  {
    category: "Mises en situation",
    type: "concept",
    question: "Un employeur refuse d'embaucher des femmes dans son entreprise. Que dit la loi ?",
    options: [
      "C'est légal",
      "C'est interdit",
      "C'est permis pour certaines entreprises",
      "C'est permis si l'employeur est homme"
    ],
    answer: 1,
    explanation: "FR : Correct ! Selon le Code du travail et les lois sur l'égalité, il est interdit de refuser un emploi à une personne uniquement parce qu'elle est une femme. Tous les candidats doivent être traités sur leurs compétences et qualifications. 中：正确。根据劳动法及平等权利法律，仅因为性别拒绝雇佣是违法的。所有求职者都应根据能力和资历平等对待。"
  },
  {
    category: "Mises en situation",
    type: "concept",
    question: "À l'école publique, qui peut porter des signes religieux très visibles ?",
    options: [
      "Tous les élèves",
      "Aucun élève",
      "Seulement les enseignants",
      "Les parents"
    ],
    answer: 1,
    explanation: "FR : Correct ! La loi interdit aux élèves de porter des signes ou tenues religieuses trop visibles afin de garantir la neutralité de l'école et le respect de la liberté de conscience de tous. 中：正确。法律禁止学生佩戴明显的宗教标志或服饰，以确保学校中立，并尊重所有人的信仰自由。"
  },
  {
    category: "Mises en situation",
    type: "concept",
    question: "À l'école publique, qui peut porter des signes religieux très visibles ?",
    options: [
      "Seuls les élèves peuvent en porter",
      "Seuls les enseignants peuvent en porter",
      "Ni les enseignants ni les élèves ne peuvent en porter",
      "Seuls les directeurs d'école peuvent en porter"
    ],
    answer: 2,
    explanation: "FR : Correct ! La loi impose la neutralité dans les écoles publiques : ni les élèves ni les enseignants ne peuvent afficher de signes religieux visibles. 中：正确。法律要求公立学校保持中立：学生和教师都不得佩戴明显宗教标志。"
  },
  {
    category: "Mises en situation",
    type: "concept",
    question: "Qui doit respecter le principe de neutralité religieuse dans une préfecture ?",
    options: [
      "Les agents publics",
      "Les citoyens seulement",
      "Les étrangers",
      "Les entreprises"
    ],
    answer: 0,
    explanation: "FR : Correct ! Les agents publics travaillant dans une préfecture doivent respecter la neutralité religieuse : ils ne doivent pas afficher leurs convictions religieuses pendant leur service et doivent traiter tous les usagers de manière impartiale, sans favoritisme ni discrimination. 中：正确。在省政府工作的公职人员必须遵守宗教中立原则：工作期间不得展示个人宗教信仰，并且要对所有使用公共服务的民众公平公正，不偏袒也不歧视。"
  },
  {
    category: "Mises en situation",
    type: "concept",
    question: "Madame X veut changer de religion. Elle doit :",
    options: [
      "Obtenir l'accord de son père",
      "Obtenir l'accord de son mari",
      "Pouvoir le faire si elle le souhaite",
      "Obtenir l'accord de son employeur"
    ],
    answer: 2,
    explanation: "FR : Correct ! En France, toute personne est libre de choisir ou de changer sa religion selon sa conscience, sans autorisation. 中：正确。在法国，每个人都有权根据自己的信仰自由选择或改变宗教，不需要获得任何许可。"
  },
  {
    category: "Mises en situation",
    type: "concept",
    question: "Monsieur Y est élève dans une école publique et veut porter un symbole religieux très visible. Il peut :",
    options: [
      "Oui, toujours",
      "Non",
      "Seulement avec autorisation des parents",
      "Seulement les enseignants peuvent"
    ],
    answer: 1,
    explanation: "FR : Correct ! Les élèves dans les écoles publiques ne peuvent pas porter de signes religieux très visibles afin de respecter la neutralité et la liberté de conscience de tous. 中：正确。公立学校的学生不得佩戴明显宗教标志，以维护中立和所有学生的信仰自由。"
  },
  {
    category: "Mises en situation",
    type: "concept",
    question: "Monsieur Y veut prier à l'école pendant les cours. Que peut-il faire ?",
    options: [
      "Pratiquer librement dans la classe",
      "Ne pas prier pendant les cours",
      "Demander au directeur de changer l'emploi du temps",
      "Organiser un groupe de prière obligatoire"
    ],
    answer: 1,
    explanation: "FR : Correct ! À l'école publique, la prière doit se faire en dehors des heures de cours et dans un cadre privé. 中：正确。在公立学校，祈祷必须在课外时间进行，并在私人空间内完成。"
  },
  {
    category: "Mises en situation",
    type: "concept",
    question: "Madame X ne croit en aucune religion.",
    options: [
      "Elle doit choisir une religion",
      "Elle a le droit de ne pas croire",
      "Elle doit demander l'accord de ses parents",
      "Elle doit cacher son absence de croyance"
    ],
    answer: 1,
    explanation: "FR : Correct ! Chaque personne est libre de croire ou de ne pas croire en toute conscience. 中：正确。每个人都可以自由选择信仰或不信仰。"
  },
  {
    category: "Mises en situation",
    type: "concept",
    question: "Un agent public dans une mairie doit :",
    options: [
      "Favoriser certaines religions",
      "Être neutre vis-à-vis des usagers",
      "Imposer sa religion",
      "Promouvoir sa croyance personnelle"
    ],
    answer: 1,
    explanation: "FR : Correct ! La neutralité signifie que l'agent public ne favorise ni ne discrimine personne pour des raisons religieuses. 中：正确。中立意味着公职人员不得因宗教原因偏袒或歧视任何人。"
  },
  {
    category: "Mises en situation",
    type: "concept",
    question: "À l'école publique, les enseignants :",
    options: [
      "Peuvent imposer leur religion aux élèves",
      "Doivent rester neutres",
      "Peuvent organiser des prières obligatoires",
      "Peuvent refuser les élèves qui ne croient pas"
    ],
    answer: 1,
    explanation: "FR : Correct ! Les enseignants doivent respecter la neutralité religieuse, afin que tous les élèves puissent exercer leur liberté de conscience. 中：正确。教师必须保持宗教中立，确保所有学生都能自由选择信仰或不信仰。"
  },
  {
    category: "Mises en situation",
    type: "concept",
    question: "Les parents de Madame X veulent que leur fille ne porte pas de symbole religieux à l'école. Que dit la loi ?",
    options: [
      "L'école publique peut l'interdire",
      "Les parents imposent la loi",
      "La fille peut le porter librement",
      "Seul le maire décide"
    ],
    answer: 0,
    explanation: "FR : Correct ! Dans les écoles publiques, le principe de laïcité interdit le port de signes religieux très visibles par les élèves. Les parents ne peuvent pas contourner cette règle. 中：正确。公立学校遵循世俗原则，禁止学生佩戴显著的宗教标志。家长不能规避这条规定。"
  },
  {
    category: "Mises en situation",
    type: "concept",
    question: "Un employeur refuse d'embaucher des femmes. Que dit la loi ?",
    options: [
      "C'est légal",
      "C'est interdit",
      "C'est autorisé si l'entreprise est privée",
      "C'est permis selon l'âge"
    ],
    answer: 1,
    explanation: "FR : Correct ! Refuser d'embaucher une femme simplement à cause de son sexe constitue une discrimination interdite par la loi. 中：正确。单纯因为性别拒绝招聘属于法律禁止的歧视。"
  },
  {
    category: "Mises en situation",
    type: "concept",
    question: "Monsieur X et Madame Y ont des revenus différents. L'égalité signifie :",
    options: [
      "Tous doivent avoir le même revenu",
      "Tous ont les mêmes droits",
      "Les hommes ont plus de droits",
      "Les riches ont plus de droits"
    ],
    answer: 1,
    explanation: "FR : Correct ! L'égalité républicaine signifie que tous les citoyens ont les mêmes droits devant la loi, indépendamment de leur revenu. 中：正确。公民平等意味着所有人在法律面前拥有同等权利，与收入无关。"
  },
  {
    category: "Mises en situation",
    type: "concept",
    question: "Un ministre peut-il insulter quelqu'un ?",
    options: [
      "Oui, parce qu'il est ministre",
      "Non, seulement le président peut le faire",
      "Non, car tous les citoyens sont égaux",
      "Oui, mais seulement envers ses subordonnés"
    ],
    answer: 2,
    explanation: "FR : Correct ! Tous les citoyens sont égaux devant la loi, y compris les ministres ; personne n'a le droit d'insulter légalement quelqu'un. 中：正确。所有人在法律面前平等，包括部长在内，没有人可以合法地侮辱他人。"
  },
  {
    category: "Mises en situation",
    type: "concept",
    question: "Madame X veut exprimer ses idées dans un journal. Elle doit :",
    options: [
      "Tout dire sans limite",
      "Respecter la loi",
      "Harceler les autres",
      "Éviter de respecter les droits des autres"
    ],
    answer: 1,
    explanation: "FR : Correct ! La liberté d'expression permet d'exprimer ses idées, mais toujours dans le cadre légal. 中：正确。言论自由允许表达观点，但必须在法律框架内进行。"
  },
  {
    category: "Mises en situation",
    type: "concept",
    question: "Monsieur Y veut voyager librement en France. La liberté de circulation signifie :",
    options: [
      "Pouvoir voyager uniquement à l'étranger",
      "Pouvoir se déplacer librement sur le territoire",
      "Pouvoir choisir ses impôts",
      "Pouvoir s'absenter de l'école"
    ],
    answer: 1,
    explanation: "FR : Correct. La liberté de circulation garantit le droit de se déplacer librement sur le territoire. 中：正确。行动自由保障个人在领土范围内自由出行的权利。"
  },
  {
    category: "Mises en situation",
    type: "concept",
    question: "Une personne veut rejoindre une association culturelle. La liberté d'association lui permet :",
    options: [
      "De la créer ou la rejoindre",
      "D'imposer des adhérents",
      "D'obliger tout le monde à adhérer",
      "De créer des impôts"
    ],
    answer: 0,
    explanation: "FR : Correct. La liberté d'association permet de créer une association ou d'en devenir membre. 中：正确。结社自由允许个人创建协会或加入协会。"
  },
  {
    category: "Mises en situation",
    type: "concept",
    question: "Madame X voit un drapeau bleu-blanc-rouge à l'école. Ce drapeau représente :",
    options: [
      "La République française",
      "L'Union européenne",
      "La monarchie",
      "Napoléon"
    ],
    answer: 0,
    explanation: "FR : Correct. Le drapeau bleu-blanc-rouge est le drapeau national de la République française. 中：正确。蓝白红三色旗是法国共和国的国旗。"
  },
  {
    category: "Mises en situation",
    type: "concept",
    question: "Un enfant veut exprimer ses idées à l'école. Il peut :",
    options: [
      "Harceler ses camarades",
      "Respecter la loi",
      "Dire tout ce qu'il veut sans limite",
      "Ignore les droits des autres"
    ],
    answer: 1,
    explanation: "FR : Correct. La liberté d'expression existe, mais elle doit respecter la loi et les droits des autres. 中：正确。言论自由存在，但必须遵守法律并尊重他人的权利。"
  },
  {
    category: "Mises en situation",
    type: "concept",
    question: "Un agent public porte un symbole religieux visible pendant son service. Que dit le principe de neutralité ?",
    options: [
      "C'est autorisé",
      "Ce n'est pas autorisé",
      "Autorisé selon la religion",
      "Autorisé avec l'accord des usagers"
    ],
    answer: 1,
    explanation: "FR : Correct. Le principe de neutralité impose que les agents publics ne portent pas de signes religieux visibles pendant leur service. 中：正确。中立原则要求公职人员在工作期间不得佩戴明显宗教标志。"
  },
  {
    category: "Mises en situation",
    type: "concept",
    question: "Madame X ne croit en aucune religion. La loi française :",
    options: [
      "L'oblige à croire",
      "Respecte son choix",
      "L'oblige à se déclarer",
      "L'interdit"
    ],
    answer: 1,
    explanation: "FR : Correct. La liberté de conscience permet de ne croire en aucune religion. 中：正确。良心自由允许不信任何宗教，法律尊重这一选择。"
  },
  {
    category: "Mises en situation",
    type: "concept",
    question: "Une mairie refuse un service à cause d'une croyance. Cette situation est :",
    options: [
      "Conforme",
      "Discriminatoire",
      "Normale",
      "Autorisée"
    ],
    answer: 1,
    explanation: "FR : Correct. Refuser un service en raison d'une croyance est une discrimination. 中：正确。因信仰而拒绝服务属于歧视行为。"
  },
  {
    category: "Mises en situation",
    type: "concept",
    question: "Un citoyen refuse de respecter une loi pour des raisons personnelles. Que dit la République ?",
    options: [
      "C'est acceptable",
      "La loi s'impose à tous",
      "Cela dépend de la religion",
      "Cela dépend de l'âge"
    ],
    answer: 1,
    explanation: "FR : Correct. La loi s'applique à tous, sans exception. 中：正确。法律适用于所有人，没有例外。"
  },
  {
    category: "Mises en situation",
    type: "concept",
    question: "Une personne exprime une opinion sans insulter ni discriminer. Elle exerce :",
    options: [
      "Sa liberté d'expression",
      "Une infraction",
      "Une provocation",
      "Une discrimination"
    ],
    answer: 0,
    explanation: "FR : Correct. Exprimer une opinion de manière respectueuse relève de la liberté d'expression. 中：正确。以尊重方式表达观点属于言论自由。"
  },
  {
    category: "Mises en situation",
    type: "concept",
    question: "Un employeur traite différemment deux salariés à cause de leur sexe. Cette situation est :",
    options: [
      "Légale",
      "Interdite",
      "Traditionnelle",
      "Acceptable"
    ],
    answer: 1,
    explanation: "FR : Correct. La discrimination selon le sexe est interdite par la loi. 中：正确。法律禁止基于性别的歧视。"
  },
  {
    category: "Mises en situation",
    type: "concept",
    question: "Un citoyen respecte les lois et les autres. Il agit selon :",
    options: [
      "Les valeurs républicaines",
      "Ses intérêts",
      "Sa religion",
      "Son origine"
    ],
    answer: 0,
    explanation: "FR : Correct. Respecter les lois et les autres correspond aux valeurs républicaines. 中：正确。遵守法律并尊重他人符合共和价值观。"
  },

  // ==================== Laïcité ====================
  {
    category: "Laïcité",
    type: "concept",
    question: "Une personne peut-elle changer librement de religion ?",
    options: [
      "Non",
      "Oui",
      "Seulement avec autorisation",
      "Seulement à l'âge adulte"
    ],
    answer: 1,
    explanation: "FR : Correct ! En France, toute personne est libre de choisir, de changer ou d'abandonner une religion, conformément au principe de liberté de conscience. 中：正确。在法国，每个人都可以自由选择、改变或不信仰任何宗教，这是良心自由的一部分。"
  },
  {
    category: "Laïcité",
    type: "concept",
    question: "Une personne peut-elle changer librement de religion ?",
    options: [
      "Seuls les hommes peuvent",
      "Seuls ceux qui paient des impôts peuvent",
      "Seulement avec le consentement des parents",
      "Tant que l'on le souhaite"
    ],
    answer: 3,
    explanation: "FR : Correct ! Chacun est libre de changer de religion ou de conviction à tout moment de sa vie. 中：正确。每个人都可以在任何时候自由改变自己的宗教或信仰。"
  },
  {
    category: "Laïcité",
    type: "concept",
    question: "\"La France est une République indivisible, ..., démocratique et sociale\". Complétez cette phrase extraite de l'article 1er de la Constitution :",
    options: [
      "Laïque",
      "Monarchique",
      "Sociale",
      "Populaire"
    ],
    answer: 0,
    explanation: "FR : Correct ! La laïcité est un principe fondamental de la République française, inscrit dans la Constitution. 中：正确。世俗性是法国共和国的基本原则之一，并写入宪法。"
  },
  {
    category: "Laïcité",
    type: "concept",
    question: "En quelle année la loi de séparation des Églises et de l'État a-t-elle été votée ?",
    options: [
      "1905",
      "1789",
      "1958",
      "1881"
    ],
    answer: 0,
    explanation: "FR : Correct ! La loi de 1905 fonde officiellement la séparation des Églises et de l'État en France. 中：正确。1905 年法律正式确立了政教分离原则。"
  },
  {
    category: "Laïcité",
    type: "concept",
    question: "Que permet le principe de laïcité ?",
    options: [
      "De choisir sa religion à l'école",
      "D'assurer la neutralité de l'État",
      "De favoriser une religion",
      "De pratiquer la religion à l'école"
    ],
    answer: 1,
    explanation: "FR : Correct ! La laïcité garantit que l'État ne favorise ni ne combat aucune religion. 中：正确。世俗原则确保国家对所有宗教保持中立。"
  },
  {
    category: "Laïcité",
    type: "concept",
    question: "Que permet le principe de laïcité ?",
    options: [
      "La liberté de conscience",
      "L'obligation de pratiquer une religion",
      "L'interdiction de toutes les religions",
      "Le versement d'allocations aux croyants"
    ],
    answer: 0,
    explanation: "FR : Correct ! Le principe de la laïcité garantit la liberté de conscience. Cela signifie que chaque personne est libre de croire, de ne pas croire, de changer de religion ou de conviction, sans pression de l'État ou d'une religion. 中：正确。世俗原则保障良心自由，也就是每个人都有信仰、不信仰或改变宗教与思想信念的自由，不受国家或宗教的强制。"
  },
  {
    category: "Laïcité",
    type: "concept",
    question: "Quel droit est garanti par la laïcité ?",
    options: [
      "Le droit de changer de religion",
      "Le droit de ne pas payer d'impôts",
      "Le droit de ne pas respecter la loi",
      "Le droit de travailler moins"
    ],
    answer: 0,
    explanation: "FR : Correct ! La laïcité garantit la liberté de conscience, y compris le droit de changer de religion. 中：正确。世俗原则保障改变宗教信仰的权利。"
  },
  {
    category: "Laïcité",
    type: "concept",
    question: "Pourquoi le principe de laïcité doit-il être respecté à l'école ?",
    options: [
      "Pour imposer la religion de l'État",
      "Pour garantir que les élèves soient traités équitablement",
      "Pour choisir la religion des enfants",
      "Pour enseigner une seule religion"
    ],
    answer: 1,
    explanation: "FR : Correct ! La laïcité permet d'assurer l'égalité et le respect de tous les élèves, quelles que soient leurs convictions. 中：正确。世俗原则保证所有学生不因宗教信仰不同而受到不公平对待。"
  },
  {
    category: "Laïcité",
    type: "concept",
    question: "Qu'est-ce que la laïcité ?",
    options: [
      "La liberté de religion et la neutralité de l'État",
      "L'obligation d'être religieux",
      "La promotion d'une religion",
      "L'interdiction des fêtes religieuses"
    ],
    answer: 0,
    explanation: "FR : Correct ! La laïcité garantit à la fois la liberté de conscience et la neutralité de l'État vis-à-vis des religions. 中：正确。世俗原则既保障宗教自由，也确保国家保持中立。"
  },
  {
    category: "Laïcité",
    type: "concept",
    question: "Concernant la pratique de la religion, quelle proposition est correcte ?",
    options: [
      "L'État impose une religion",
      "Chacun peut pratiquer sa religion librement",
      "Les enseignants doivent imposer leur religion",
      "Les élèves ne peuvent pratiquer aucune religion"
    ],
    answer: 1,
    explanation: "FR : Correct ! La liberté de religion est un droit fondamental. Chacun peut croire, ne pas croire, changer de religion et pratiquer sa foi dans le respect des lois et de l'ordre public. 中：正确。宗教自由是基本权利，每个人都可以信仰、自由选择或改变宗教，并在法律和公共秩序允许的范围内进行宗教活动。"
  },
  {
    category: "Laïcité",
    type: "concept",
    question: "Pourquoi le principe de laïcité doit-il être respecté à l'école ?",
    options: [
      "Pour imposer la religion",
      "Pour garantir la liberté de conscience",
      "Pour choisir la religion des enfants",
      "Pour enseigner une seule religion"
    ],
    answer: 1,
    explanation: "FR : Correct ! Le principe de laïcité à l'école garantit que chaque élève puisse avoir ou ne pas avoir de religion, et que personne ne subisse de pression ou de discrimination religieuse. Cela permet un environnement scolaire neutre, respectueux de tous les élèves. 中：正确。学校遵守世俗原则可以保证每个学生可以有宗教信仰或不信仰宗教，同时没人受到宗教压力或歧视。这确保学校环境中立且尊重所有学生。"
  },
  {
    category: "Laïcité",
    type: "concept",
    question: "Selon le principe de laïcité, que signifie la neutralité de l'État ?",
    options: [
      "Favoriser certaines religions",
      "Ne pas favoriser ni discriminer aucune religion",
      "Imposer la religion d'État",
      "Interdire toutes les religions"
    ],
    answer: 1,
    explanation: "FR : Correct ! La neutralité de l'État signifie qu'il doit rester impartial vis-à-vis de toutes les religions. L'État ne soutient aucune religion et ne discrimine aucune croyance, permettant à chacun de pratiquer sa foi librement ou de ne pas en avoir. 中：正确。国家中立意味着对所有宗教保持公正：既不支持任何宗教，也不歧视任何信仰，使每个人都可以自由信仰或选择不信仰。"
  },
  {
    category: "Laïcité",
    type: "concept",
    question: "La laïcité impose-t-elle aux agents publics d'être neutres vis-à-vis des usagers ?",
    options: [
      "Oui",
      "Non",
      "Seulement aux enseignants",
      "Seulement aux policiers"
    ],
    answer: 0,
    explanation: "FR : Correct ! La laïcité impose aux agents publics, comme les fonctionnaires ou les employés de services publics, d'être neutres vis-à-vis des usagers. Cela signifie qu'ils ne doivent pas afficher leurs convictions religieuses et doivent traiter tous les citoyens de manière égale et impartiale. 中：正确。世俗原则要求公职人员（如公务员或公共服务工作人员）对使用者保持中立，即不得展示个人宗教信仰，并且必须平等、公正地对待所有公民。"
  },
  {
    category: "Laïcité",
    type: "concept",
    question: "Que garantit le principe de laïcité ?",
    options: [
      "Liberté de conscience",
      "Obligation religieuse",
      "Favoritisme religieux",
      "Imposition d'une religion"
    ],
    answer: 0,
    explanation: "FR : Correct ! La laïcité garantit la liberté de conscience, c'est-à-dire le droit pour chacun de croire ou de ne pas croire, sans pression ni discrimination de la part de l'État ou d'autres citoyens. 中：正确。世俗原则保障信仰自由，即每个人都可以选择信仰或不信仰，不受国家或他人的压力与歧视。"
  },
  {
    category: "Laïcité",
    type: "concept",
    question: "La laïcité dans la vie quotidienne signifie que :",
    options: [
      "Personne n'a le droit de croire en une religion",
      "Tout le monde est obligé de croire en une religion",
      "Les personnes qui travaillent sont obligées de croire en une religion",
      "Chacun est libre de croire ou de ne pas croire"
    ],
    answer: 3,
    explanation: "FR : Correct ! La laïcité garantit que chaque personne peut choisir librement sa foi ou l'absence de foi, dans le respect des lois et des droits d'autrui. 中：正确。世俗原则保障每个人可以自由选择信仰或不信仰，同时尊重法律与他人的权利。"
  },
  {
    category: "Laïcité",
    type: "concept",
    question: "Que représente la laïcité ?",
    options: [
      "La neutralité de l'État et la liberté de conscience",
      "L'obligation d'être religieux",
      "La promotion d'une religion",
      "L'interdiction des fêtes religieuses"
    ],
    answer: 0,
    explanation: "FR : Correct ! La laïcité signifie que l'État est neutre face aux religions et que chaque individu dispose de la liberté de conscience, garantissant ainsi l'égalité et le respect de toutes les convictions. 中：正确。世俗原则意味着国家对宗教保持中立，同时每个人拥有信仰自由，保障平等并尊重所有信仰。"
  },
  {
    category: "Laïcité",
    type: "concept",
    question: "La France reconnaît-elle une religion officielle ?",
    options: [
      "Oui",
      "Non",
      "Seulement le catholicisme",
      "Selon les régions"
    ],
    answer: 1,
    explanation: "FR : Correct. La France ne reconnaît aucune religion officielle. 中：正确。法国不承认官方宗教。"
  },
  {
    category: "Laïcité",
    type: "concept",
    question: "Le principe de neutralité s'applique principalement :",
    options: [
      "Aux agents publics",
      "Aux élèves uniquement",
      "Aux associations privées",
      "Aux familles"
    ],
    answer: 0,
    explanation: "FR : Correct. Le principe de neutralité s'applique aux agents publics dans l'exercice de leurs fonctions. 中：正确。中立原则主要适用于公职人员在履行职务时。"
  },
  {
    category: "Laïcité",
    type: "concept",
    question: "L'État français est :",
    options: [
      "Religieux",
      "Neutre",
      "Confessionnel",
      "Monarchique"
    ],
    answer: 1,
    explanation: "FR : Correct. L'État français est neutre sur le plan religieux (principe de laïcité). 中：正确。法国国家在宗教问题上保持中立（世俗原则）。"
  },

  // ==================== Devise et symboles ====================
  {
    category: "Devise et symboles",
    type: "concept",
    question: "À quoi correspond la date du 14 juillet ?",
    options: [
      "La fête du travail",
      "La fête nationale française",
      "La prise des femmes",
      "Festival de musique"
    ],
    answer: 1,
    explanation: "FR : Correct ! Le 14 juillet est la fête nationale française, commémorant la Révolution. 中：正确！7月14日是法国国庆日，纪念法国大革命。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "À quoi correspond la date du 14 juillet ?",
    options: [
      "La prise de la Bastille",
      "L'Armistice de la Première Guerre mondiale",
      "La Victoire de 1945",
      "La Journée de l'Europe"
    ],
    answer: 0,
    explanation: "FR : Exact ! Le 14 juillet 1789, la Bastille a été prise, marquant le début de la Révolution française. 中：正确！1789年7月14日，攻占巴士底狱，标志法国大革命开始。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "Quel est l'un des symboles de la République française ?",
    options: [
      "La tour Eiffel",
      "Le coq gaulois",
      "Marianne",
      "La Joconde"
    ],
    answer: 2,
    explanation: "FR : Correct ! Marianne est le symbole officiel de la République française, représentant la liberté et la raison. En dehors de cela, les symboles de la France comprennent également le drapeau, la devise française, La Marseillaise et la fête nationale. 中：正确！玛丽安娜是法国共和国的官方象征，代表自由和理性。除此之外法国的象征还有国旗/法国格言/马赛曲/国庆节"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "Quel est l'un des symboles de la République française ?",
    options: [
      "Le drapeau français",
      "Le Louvre",
      "Le président",
      "Le drapeau de l'Union européenne"
    ],
    answer: 0,
    explanation: "FR : Correct ! Le drapeau bleu, blanc, rouge est un symbole officiel de la République française. En dehors de cela, les symboles de la France comprennent également Marianne, la devise française, La Marseillaise et la fête nationale. 中：正确！蓝白红三色旗是法国共和国的官方象征。此之外法国的象征还有玛丽安娜/法国格言/马赛曲/国庆节"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "Quel est l'un des symboles de la République française ?",
    options: [
      "Liberté, Égalité, Fraternité",
      "La mairie",
      "La Joconde",
      "Paris"
    ],
    answer: 0,
    explanation: "FR : Correct ! C'est la devise de la République française. C'est aussi un symbole officiel de la République française. En dehors de cela, les symboles de la France comprennent également le drapeau français, la devise française, La Marseillaise et la fête nationale. 中：正确！\"自由、平等、博爱\"是法国共和国的格言。也是法国共和国的官方象征。此之外法国的象征还有国旗/法国格言/马赛曲/国庆节"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "Le principe d'égalité signifie que :",
    options: [
      "Tous les citoyens ont les mêmes droits",
      "Tous les citoyens doivent avoir le même revenu",
      "Les hommes ont plus de droits que les femmes",
      "Les riches ont plus de droits que les pauvres"
    ],
    answer: 0,
    explanation: "FR : Correct ! Tous les citoyens, indépendamment de leur origine, sexe ou richesse, ont les mêmes droits. 中：正确！所有公民，无论出身、性别或财富，都享有相同权利。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "\"Liberté, égalité, fraternité\", c'est :",
    options: [
      "Une chanson populaire",
      "La devise de la République française",
      "Un poème de Victor Hugo",
      "Une citation d'un roi"
    ],
    answer: 1,
    explanation: "FR : Correct ! C'est la devise officielle de la République. 中：正确！这是法国共和国的官方格言。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "\"Liberté, égalité, fraternité\", c'est :",
    options: [
      "Fait partie de notre patrimoine national",
      "Une expression utilisée uniquement pendant la Révolution française",
      "Une devise qui s'applique seulement aux citoyens français adultes",
      "Une phrase inventée pour les fêtes nationales modernes"
    ],
    answer: 0,
    explanation: "FR : Correct ! Cette devise fait partie du patrimoine de la République française et symbolise ses valeurs. 中：正确！这句格言是法国共和国的国家遗产，象征其核心价值。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "Certains métiers peuvent-ils être réservés aux hommes ?",
    options: [
      "Oui",
      "Non",
      "Selon le revenu",
      "Selon l'âge"
    ],
    answer: 1,
    explanation: "FR : Correct ! Hommes et femmes ont accès aux mêmes métiers. 中：正确！男女可以从事同样的职业。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "Certains métiers peuvent-ils être réservés aux hommes ?",
    options: [
      "Oui, parce que certains métiers sont très difficiles pour les femmes",
      "Non, car l'égalité est un principe fondamental",
      "Oui, si toutes les femmes sont d'accord",
      "Non, car les femmes sont toujours moins payées"
    ],
    answer: 1,
    explanation: "FR : Correct ! L'égalité entre les femmes et les hommes est un principe fondamental. 中：正确！男女平等是共和国的基本原则。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "De quand date la Constitution de la Ve République ?",
    options: [
      "1789",
      "1958",
      "1946",
      "1871"
    ],
    answer: 1,
    explanation: "FR : Correct ! La Constitution de la Ve République date de 1958. 中：正确！第五共和国宪法制定于1958年。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "Le régime de la France est :",
    options: [
      "Une monarchie",
      "Une république",
      "Une dictature",
      "Une confédération"
    ],
    answer: 1,
    explanation: "FR : Correct ! La France est une République. 中：正确！法国是共和国。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "Le régime de la France est :",
    options: [
      "Une démocratie",
      "Un régime autoritaire",
      "Une monarchie absolue",
      "Une dictature militaire"
    ],
    answer: 0,
    explanation: "FR : Correct ! Les citoyens élisent leurs représentants. 中：正确！公民通过选举选出代表。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "Lequel de ces symboles représente officiellement la République française ?",
    options: [
      "La tour Eiffel",
      "Le drapeau tricolore",
      "La statue de la Liberté",
      "Le Louvre"
    ],
    answer: 1,
    explanation: "FR : Symbole officiel de la République française. 中：法国共和国的官方象征。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "Où peut-on voir la devise de la République ?",
    options: [
      "Dans toutes les maisons",
      "À la mairie",
      "Sur les réseaux sociaux",
      "Au bureau"
    ],
    answer: 1,
    explanation: "FR : Correct ! La devise est affichée dans les bâtiments officiels comme la mairie. 中：正确。共和国格言会出现在市政府等公共机构中。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "Où peut-on voir la devise de la République ?",
    options: [
      "Pièces de monnaie et timbres",
      "Publicités commerciales",
      "Livres scolaires",
      "Affiches de cinéma"
    ],
    answer: 0,
    explanation: "FR : Correct ! La devise figure souvent sur les pièces de monnaie et les timbres officiels. 中：正确。共和国格言常印在硬币和邮票上。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "Qu'est-ce que l'égalité ?",
    options: [
      "Que tous les citoyens ont exactement le même revenu",
      "Que tous les citoyens ont les mêmes droits",
      "Que tous les citoyens doivent avoir les mêmes opinions",
      "Que tous les citoyens doivent pratiquer la même religion"
    ],
    answer: 1,
    explanation: "FR : Correct ! L'égalité signifie l'égalité des droits devant la loi. 中：正确。平等指法律面前人人权利相同。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "Qu'est-ce que l'égalité ?",
    options: [
      "Les hommes ont des privilèges",
      "Les riches ont des privilèges",
      "Le président a des privilèges",
      "Égalité entre hommes et femmes"
    ],
    answer: 3,
    explanation: "FR : Correct ! Les hommes et les femmes ont les mêmes droits. 中：正确。男女享有同等权利。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "Que signifie la liberté ?",
    options: [
      "Pouvoir faire tout ce que l'on veut sans limite",
      "Pouvoir agir dans le respect de la loi",
      "Pouvoir obliger les autres à suivre ses idées",
      "Ne pas payer d'impôts"
    ],
    answer: 1,
    explanation: "FR : Correct ! La liberté s'exerce dans le cadre des lois. 中：正确。自由必须在法律范围内。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "La liberté d'expression signifie :",
    options: [
      "Dire tout ce que l'on veut sans aucune limite",
      "Critiquer et insulter les autres librement",
      "Pouvoir exprimer ses idées et opinions dans le respect des lois et des autres",
      "Être toujours d'accord avec la majorité"
    ],
    answer: 2,
    explanation: "FR : Correct ! C'est la définition officielle de la liberté d'expression. 中：正确。在尊重法律和他人的情况下表达观点。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "Que signifie le mot \"fraternité\" dans la devise française ?",
    options: [
      "Solidarité entre citoyens",
      "Amitié seulement entre frères",
      "Partage obligatoire des biens",
      "Exclusion de ceux qui sont différents"
    ],
    answer: 0,
    explanation: "FR : Correct ! La fraternité signifie l'entraide et la solidarité entre tous les citoyens. 中：正确。博爱意味着公民之间互相帮助和团结。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "Que signifie le mot \"fraternité\" dans la devise française ?",
    options: [
      "Chacun doit penser uniquement à lui-même",
      "Les citoyens doivent s'entraider et se respecter",
      "Tout le monde doit avoir les mêmes opinions",
      "Les citoyens doivent obéir sans discuter"
    ],
    answer: 1,
    explanation: "FR : Correct ! La fraternité signifie la solidarité, l'entraide et le respect entre les citoyens. 中：正确。博爱意味着公民之间互相帮助和尊重。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "La Sécurité sociale est une manifestation de :",
    options: [
      "La liberté",
      "L'égalité",
      "La fraternité",
      "Le bonheur"
    ],
    answer: 2,
    explanation: "FR : Correct ! La Sécurité sociale repose sur la solidarité entre les citoyens.la CAF et les systèmes de retraite et de prise en charge des personnes âgées sont des manifestations concrètes de la solidarité et de la bienveillance sociale. 中：正确。社会保障体现博爱精神。caf和养老也都是博爱的体现"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "Quel animal est un symbole de la France ?",
    options: [
      "Le lion",
      "Le coq",
      "L'aigle",
      "L'ours"
    ],
    answer: 1,
    explanation: "FR : Correct ! Le coq est un symbole historique de la France. 中：正确。公鸡是法国的象征。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "Quel est l'un des rôles des associations ?",
    options: [
      "Gérer les écoles",
      "Aider les personnes dans le besoin pour favoriser la solidarité",
      "Créer des impôts",
      "Définir les lois"
    ],
    answer: 1,
    explanation: "FR : Correct ! Les associations favorisent l'entraide et la solidarité. 中：正确。协会帮助弱势群体，促进团结。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "Quel est le nom de l'hymne national ?",
    options: [
      "La Marseillaise",
      "La Carmagnole",
      "Le Chant du départ",
      "Le Chant des partisans"
    ],
    answer: 0,
    explanation: "FR : Correct ! La Marseillaise est l'hymne national français. 中：正确。《马赛曲》是法国国歌。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "Quel symbole de la République française est tricolore ?",
    options: [
      "Le drapeau",
      "Marianne",
      "Le coq",
      "La Marseillaise"
    ],
    answer: 0,
    explanation: "FR : Correct ! Le drapeau est bleu, blanc et rouge. 中：正确。国旗是三色的。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "Quelle est la date de la fête nationale française ?",
    options: [
      "1er mai",
      "14 juillet",
      "11 novembre",
      "25 décembre"
    ],
    answer: 1,
    explanation: "FR : Correct ! C'est la fête nationale française. 中：正确。7月14日是法国国庆。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "Quelle est la devise de la République française ?",
    options: [
      "Liberté, fraternité",
      "Liberté, égalité, fraternité",
      "Egalité, fraternité",
      "Paix, liberté, égalité"
    ],
    answer: 1,
    explanation: "FR : Correct ! C'est la devise officielle. 中：正确。这是共和国格言。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "Quelle est la langue officielle de la République française ?",
    options: [
      "Anglais",
      "Espagnol",
      "Français",
      "Allemand"
    ],
    answer: 2,
    explanation: "FR : Correct ! Le français est la langue officielle. 中：正确。法语是官方语言。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "Quelle est la place de la langue française dans la République ?",
    options: [
      "Langue secondaire",
      "Langue officielle",
      "Langue facultative",
      "Langue régionale"
    ],
    answer: 1,
    explanation: "FR : Correct ! La Constitution reconnaît le français. 中：正确。宪法规定法语为官方语言。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "Quelle liberté permet à chacun d'exprimer ses idées ?",
    options: [
      "Liberté de circulation",
      "Liberté d'expression",
      "Liberté religieuse",
      "Liberté d'association"
    ],
    answer: 1,
    explanation: "FR : Correct ! La liberté d'expression permet à chaque citoyen d'exprimer ses idées, ses opinions et ses convictions, à l'oral, à l'écrit ou par d'autres moyens, tout en respectant les lois de la République, notamment celles qui protègent l'ordre public et les droits d'autrui. 中：正确。言论自由允许每个公民通过口头、书面或其他方式表达自己的思想、观点和信念，但必须遵守共和国的法律，尊重公共秩序以及他人的权利。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "Quelle proposition est correcte ? La liberté d'expression :",
    options: [
      "Permet de tout dire sans conséquence",
      "Permet d'exprimer ses idées dans le respect de la loi",
      "Permet de harceler les autres",
      "N'existe pas en France"
    ],
    answer: 1,
    explanation: "FR : Correct ! La liberté d'expression permet à chacun d'exprimer librement ses opinions, mais dans le respect des lois de la République, qui protègent la dignité humaine, la sécurité publique et les droits des autres citoyens. 中：正确。言论自由允许公民自由表达意见，但必须遵守共和国的法律，这些法律旨在保护人的尊严、公共安全以及他人的权利。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "Quelles sont les couleurs du drapeau français ?",
    options: [
      "Bleu, blanc, rouge",
      "Vert, blanc, rouge",
      "Rouge, jaune, bleu",
      "Bleu, blanc, vert"
    ],
    answer: 0,
    explanation: "FR : Correct ! Le drapeau français est composé de trois bandes verticales bleu, blanc et rouge, symboles de la République et de l'unité nationale. 中：正确。法国国旗由蓝、白、红三条竖色组成，象征共和国和民族团结。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "Qu'est-ce que la Marseillaise ?",
    options: [
      "Une danse traditionnelle",
      "L'hymne national français",
      "Une devise",
      "Une fête"
    ],
    answer: 1,
    explanation: "FR : Correct ! La Marseillaise est l'hymne national de la France. Elle est chantée lors des cérémonies officielles et symbolise les valeurs de la République, comme la liberté et la défense de la nation. 中：正确。《马赛曲》是法国国歌，在官方仪式上演唱，象征自由、共和国价值和保卫国家的精神。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "Qu'est ce qui est traditionnellement organisé sur les Champs Élysées le 14 juillet pour célébrer la fête nationale ?",
    options: [
      "Un défilé militaire",
      "Un marché",
      "Un festival de musique",
      "Une compétition sportive"
    ],
    answer: 0,
    explanation: "FR : Correct ! Chaque 14 juillet, un grand défilé militaire est organisé sur les Champs-Élysées afin de célébrer la fête nationale et de rendre hommage aux forces armées françaises. 中：正确。每年 7 月 14 日，香榭丽舍大街都会举行大型阅兵式，以庆祝国庆并向法国军队致敬。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "Quand a lieu le défilé militaire ?",
    options: [
      "La fête nationale",
      "Noël",
      "Le 1er mai",
      "Le jour de l'An"
    ],
    answer: 0,
    explanation: "FR : Correct ! Le défilé militaire a lieu le 14 juillet, jour de la fête nationale française. 中：正确。阅兵式在法国国庆日 7 月 14 日举行。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "Qui est Marianne ?",
    options: [
      "Une reine française",
      "Une figure symbolique de la République",
      "Une peintre célèbre",
      "Une héroïne de roman"
    ],
    answer: 1,
    explanation: "FR : Correct ! Marianne est la figure symbolique de la République française. Elle représente les valeurs républicaines telles que la liberté, l'égalité et la citoyenneté. 中：正确。玛丽安娜是法兰西共和国的象征人物，代表自由、平等和公民精神等共和国价值。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "En France, l'égalité devant la loi signifie que :",
    options: [
      "Certaines personnes peuvent être au-dessus des lois",
      "La loi s'applique différemment selon la religion",
      "La loi est la même pour tous, sans distinction",
      "La loi dépend du revenu de la personne"
    ],
    answer: 2,
    explanation: "FR : Correct ! L'égalité devant la loi signifie que tous les citoyens sont soumis aux mêmes règles juridiques, sans discrimination liée à l'origine, à la religion, au sexe, à l'opinion ou à la situation sociale. 中：正确。法律面前人人平等，意味着所有人都遵守同一套法律规则，不因出身、宗教、性别、观点或社会状况而有所不同。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "La liberté d'expression en France :",
    options: [
      "Est totale, sans limite",
      "Est autorisée mais encadrée par la loi",
      "Est interdite sur internet",
      "Est réservée aux citoyens français"
    ],
    answer: 1,
    explanation: "FR : Correct ! En France, chacun peut exprimer ses idées librement, mais cette liberté s'exerce dans un cadre légal qui interdit notamment la diffamation, l'incitation à la haine et la violence. 中：正确。在法国，公民可以自由表达意见，但必须在法律框架内进行，法律禁止诽谤、仇恨言论和煽动暴力。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "Parmi les propositions suivantes, laquelle constitue une participation citoyenne ?",
    options: [
      "Ne pas voter",
      "Payer ses impôts",
      "Insulter un fonctionnaire",
      "Boycotter les élections"
    ],
    answer: 1,
    explanation: "FR : Correct ! Payer ses impôts est un devoir citoyen et contribue au financement des services publics et au fonctionnement de la République. 中：正确。缴税是公民义务，有助于公共服务和国家运作。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "Parmi les propositions suivantes, laquelle constitue une participation citoyenne ?",
    options: [
      "Voter lors des élections",
      "Regarder la télévision tous les soirs",
      "Acheter des vêtements de marque",
      "Jouer aux jeux vidéo"
    ],
    answer: 0,
    explanation: "FR : Correct ! Voter est l'exemple le plus direct et important de participation citoyenne dans une démocratie. 中：正确。投票是民主国家最直接、最重要的公民参与形式。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "Que garantit la liberté d'expression ?",
    options: [
      "Le droit de dire tout ce que l'on veut sans limite",
      "Le droit d'exprimer ses idées dans le respect de la loi",
      "Le droit de nuire aux autres",
      "Le droit d'éviter l'école"
    ],
    answer: 1,
    explanation: "FR : Correct ! En France, chacun peut exprimer ses opinions librement, tant que cela respecte la loi (interdiction de diffamation, incitation à la haine ou violence). 中：正确。在法国，每个人都可以自由表达意见，但必须遵守法律（禁止诽谤、仇恨言论和煽动暴力）。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "À quoi sert un titre de séjour ?",
    options: [
      "Pour voyager à l'étranger",
      "Pour résider légalement en France",
      "Pour voter",
      "Pour obtenir un emploi"
    ],
    answer: 1,
    explanation: "FR : Correct ! Un titre de séjour permet aux étrangers de vivre légalement en France pour une durée déterminée ou permanente selon le type de titre. 中：正确。居留证允许外国人在法国合法居住，时间长短取决于证件类型。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "Sur quel site internet peut-on retrouver le symbole de la République française ?",
    options: [
      "Gouvernement.fr",
      "Wikipédia",
      "Facebook",
      "Twitter"
    ],
    answer: 0,
    explanation: "FR : Correct ! Le site officiel du gouvernement français publie tous les symboles officiels de la République (drapeau, devise, Marianne...). 中：正确。法国政府官方网站展示所有共和国官方象征（国旗、格言、玛丽安娜像等）。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "En application de la liberté individuelle, quelle proposition est correcte ? Une personne peut :",
    options: [
      "Agir librement dans le respect de la loi",
      "Faire ce qu'elle veut sans conséquence",
      "Ne pas respecter les droits des autres",
      "Imposer ses idées"
    ],
    answer: 0,
    explanation: "FR : Correct ! La liberté individuelle permet à chacun de faire ce qu'il souhaite, tant que ses actions respectent la loi et les droits d'autrui. 中：正确。个人自由允许每个人按照自己的意愿行事，但必须遵守法律并尊重他人权利。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "Que fait l'État pour lutter contre les discriminations ?",
    options: [
      "Il interdit certaines professions",
      "Il met en place des lois et des programmes",
      "Il favorise certaines religions",
      "Il ne fait rien"
    ],
    answer: 1,
    explanation: "FR : Correct ! L'État français a créé des lois contre le racisme, le sexisme, l'homophobie et d'autres formes de discrimination, ainsi que des programmes de sensibilisation et de soutien. 中：正确。法国政府制定了反对种族主义、性别歧视、恐同症等歧视行为的法律，并实施宣传教育和支持项目。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "Que représente Marianne ?",
    options: [
      "La République",
      "La monarchie",
      "La France de Napoléon",
      "La liberté d'expression"
    ],
    answer: 0,
    explanation: "FR : Correct ! Marianne est un symbole de la République française, représentant la liberté, l'égalité et la fraternité. On la retrouve sur les timbres, les pièces et dans les mairies. 中：正确。玛丽安象征法国共和国，代表自由、平等与博爱。她出现在邮票、硬币和市政厅等场所。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "Qu'est-ce que la liberté d'association ?",
    options: [
      "Le droit de créer ou rejoindre une association",
      "Le droit d'imposer des associations",
      "L'obligation de rejoindre une association",
      "Le droit de créer des impôts"
    ],
    answer: 0,
    explanation: "FR : Correct ! La liberté d'association permet à toute personne de fonder ou de rejoindre une association pour défendre des idées, organiser des activités ou aider la communauté. 中：正确。结社自由允许每个人创建或加入协会，以传播理念、组织活动或帮助社区。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "Qu'est-ce que la liberté ?",
    options: [
      "Le droit de faire tout ce qu'on veut",
      "Le droit d'agir dans le respect de la loi",
      "Le droit d'imposer ses idées",
      "Le droit de violer les règles"
    ],
    answer: 1,
    explanation: "FR : Correct ! La liberté consiste à pouvoir faire des choix et agir selon sa volonté, tout en respectant les lois et les droits des autres. C'est le principe fondamental de la République française. 中：正确。自由意味着可以按照自己的意愿做出选择和行动，但必须遵守法律并尊重他人的权利，这是法国共和国的基本原则。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "Quand chante-t-on La Marseillaise ?",
    options: [
      "Lors de la fête nationale",
      "Lors d'une cérémonie de mariage",
      "Lors d'obsèques",
      "Lors d'un anniversaire privé"
    ],
    answer: 0,
    explanation: "FR : Correct ! L'hymne national français, La Marseillaise, est chanté lors du 14 juillet, la fête nationale, ainsi que lors d'autres cérémonies officielles. 中：正确。法国国歌《马赛曲》在7月14日国庆日以及其他官方仪式上演唱。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "Une des valeurs de la devise républicaine est l'égalité. Qu'est-ce que cela signifie ?",
    options: [
      "Tous les citoyens doivent avoir le même revenu",
      "Tous les citoyens ont les mêmes droits",
      "Certains citoyens ont plus de droits",
      "L'État décide de l'égalité"
    ],
    answer: 1,
    explanation: "FR : Correct ! L'égalité signifie que chaque citoyen, quel que soit son sexe, son origine ou sa religion, doit avoir les mêmes droits et être traité de manière équitable par la loi. 中：正确。平等意味着每位公民，无论性别、出身或宗教，都应享有相同权利，并受到法律公平对待。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "Quelle est la place de la langue française dans la République ?",
    options: [
      "Langue secondaire",
      "Langue officielle",
      "Langue facultative",
      "Langue régionale"
    ],
    answer: 1,
    explanation: "FR : Correct ! Le français est la langue officielle de la République française, utilisée dans l'administration, l'enseignement et la vie publique. 中：正确。法语是法国的官方语言，用于政府行政、教育和公共生活。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "Quels sont des symboles officiels de la République française ?",
    options: [
      "Marianne, le drapeau tricolore, la Marseillaise",
      "Le coq seulement",
      "La tour Eiffel",
      "Napoléon"
    ],
    answer: 0,
    explanation: "FR : Correct ! Ces symboles représentent la République : Marianne incarne les valeurs républicaines, le drapeau tricolore est le symbole national, et La Marseillaise est l'hymne national. 中：正确。这些象征代表共和国：玛丽安体现共和国价值观，三色旗是国家象征，《马赛曲》是国歌。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "Le régime de la France est :",
    options: [
      "Monarchie",
      "Démocratie",
      "Dictature",
      "Confédération"
    ],
    answer: 1,
    explanation: "FR : Correct ! La France est une démocratie : le pouvoir vient du peuple, les citoyens votent et participent à la vie politique. 中：正确。法国是民主国家：权力来源于人民，公民通过投票参与政治生活。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "Que dit l'article 1er de la Constitution française ?",
    options: [
      "La France est une République indivisible, laïque, démocratique et sociale",
      "La France est une monarchie",
      "La France est une confédération",
      "La France est une dictature"
    ],
    answer: 0,
    explanation: "FR : Correct ! L'article 1er de la Constitution de 1958 définit la France comme une République qui ne peut être divisée, qui respecte la laïcité, garantit la démocratie et prend en compte la dimension sociale. 中：正确。1958年宪法第1条规定法国为不可分割的共和国，尊重世俗原则，保障民主制度，并重视社会公正。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "Qu'est-ce qui est traditionnellement organisé sur les Champs Élysées le 14 juillet ?",
    options: [
      "Un feu d'artifice géant",
      "Un concert en plein air",
      "Un défilé militaire",
      "Une parade de chars décorés"
    ],
    answer: 2,
    explanation: "FR : Correct ! Le 14 juillet, jour de la fête nationale française, un défilé militaire officiel a lieu sur les Champs Élysées à Paris, en présence des autorités et du président de la République. 中：正确。7月14日法国国庆日，香榭丽舍大道上会举行官方军事阅兵，总统及政府官员会出席。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "Dans les écoles, on peut voir la devise :",
    options: [
      "Liberté, égalité, fraternité",
      "Liberté et fraternité",
      "Paix et liberté",
      "Égalité et fraternité"
    ],
    answer: 0,
    explanation: "FR : Correct. « Liberté, égalité, fraternité » est la devise de la République française. 中：正确。\"自由、平等、博爱\"是法国共和国的格言。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "Pour vivre légalement en France, un étranger a besoin de :",
    options: [
      "Un passeport",
      "Un titre de séjour",
      "Une carte bancaire",
      "Un permis de conduire"
    ],
    answer: 1,
    explanation: "FR : Correct. Un étranger doit posséder un titre de séjour valide pour vivre légalement en France. 中：正确。外国人必须持有有效居留证才能在法国合法居住。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "Quel texte fondateur affirme les libertés fondamentales en France ?",
    options: [
      "La Constitution",
      "Le règlement intérieur des écoles",
      "Le code du travail uniquement",
      "Les lois locales"
    ],
    answer: 0,
    explanation: "FR : Correct. La Constitution affirme les libertés fondamentales en France. 中：正确。宪法确认法国的基本自由权利。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "La République française repose sur combien de valeurs principales dans sa devise ?",
    options: [
      "Deux",
      "Trois",
      "Quatre",
      "Cinq"
    ],
    answer: 1,
    explanation: "FR : Correct. La devise « Liberté, égalité, fraternité » comprend trois valeurs principales. 中：正确。\"自由、平等、博爱\"包含三项主要价值观。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "La démocratie signifie que le pouvoir appartient :",
    options: [
      "Au roi",
      "À l'armée",
      "Au peuple",
      "À la religion"
    ],
    answer: 2,
    explanation: "FR : Correct. La démocratie signifie que le pouvoir appartient au peuple. 中：正确。民主意味着权力属于人民。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "Le respect des lois est :",
    options: [
      "Facultatif",
      "Obligatoire pour tous",
      "Réservé aux fonctionnaires",
      "Optionnel selon les croyances"
    ],
    answer: 1,
    explanation: "FR : Correct. Les lois s'appliquent à tous, et leur respect est obligatoire. 中：正确。法律适用于所有人，必须遵守。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "Quel document fixe les règles fondamentales de l'organisation de l'État ?",
    options: [
      "La Constitution",
      "Le règlement scolaire",
      "Le livret de famille",
      "Le passeport"
    ],
    answer: 0,
    explanation: "FR : Correct. La Constitution fixe les règles fondamentales de l'organisation de l'État. 中：正确。宪法规定国家组织的基本规则。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "La République garantit-elle l'égalité entre les femmes et les hommes ?",
    options: [
      "Non",
      "Oui",
      "Seulement dans le travail",
      "Seulement dans la famille"
    ],
    answer: 1,
    explanation: "FR : Correct. La République garantit l'égalité entre les femmes et les hommes. 中：正确。共和国保障男女平等。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "L'égalité signifie que la loi s'applique :",
    options: [
      "Différemment selon les personnes",
      "De la même manière pour tous",
      "Selon la religion",
      "Selon la richesse"
    ],
    answer: 1,
    explanation: "FR : Correct. L'égalité signifie que la loi s'applique de la même manière pour tous. 中：正确。平等意味着法律对所有人一视同仁。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "La liberté de conscience concerne :",
    options: [
      "Les opinions religieuses ou non",
      "Le choix du métier",
      "Le droit de vote",
      "Le paiement des impôts"
    ],
    answer: 0,
    explanation: "FR : Correct. La liberté de conscience protège les opinions religieuses et non religieuses. 中：正确。良心自由保护宗教或非宗教的信仰与观点。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "La liberté individuelle a pour limite principale :",
    options: [
      "Les traditions",
      "Les droits des autres et la loi",
      "L'opinion publique",
      "L'âge"
    ],
    answer: 1,
    explanation: "FR : Correct. La liberté individuelle est limitée par les droits des autres et par la loi. 中：正确。个人自由的主要限制是他人权利和法律。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "Un citoyen doit respecter :",
    options: [
      "Uniquement ses opinions",
      "La loi",
      "Seulement les règles locales",
      "Les traditions religieuses"
    ],
    answer: 1,
    explanation: "FR : Correct. Un citoyen doit respecter la loi, qui s'applique à tous. 中：正确。公民必须遵守法律，法律对所有人都适用。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "Un service public doit traiter les usagers :",
    options: [
      "Différemment selon leurs croyances",
      "De manière égale",
      "Selon leur origine",
      "Selon leur genre"
    ],
    answer: 1,
    explanation: "FR : Correct. Le service public doit traiter tous les usagers de manière égale. 中：正确。公共服务应平等对待所有使用者。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "La République française reconnaît :",
    options: [
      "Des citoyens supérieurs",
      "Des droits égaux",
      "Une religion dominante",
      "Des privilèges héréditaires"
    ],
    answer: 1,
    explanation: "FR : Correct. La République reconnaît l'égalité des droits pour tous. 中：正确。共和国承认所有人的平等权利。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "Le respect de la loi est une :",
    options: [
      "Option",
      "Obligation civique",
      "Tradition",
      "Recommandation"
    ],
    answer: 1,
    explanation: "FR : Correct. Respecter la loi est une obligation civique pour tous. 中：正确。遵守法律是每个公民的义务。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "Les règles communes permettent :",
    options: [
      "Le désordre",
      "Le vivre-ensemble",
      "La discrimination",
      "La hiérarchie religieuse"
    ],
    answer: 1,
    explanation: "FR : Correct. Les règles communes permettent de vivre ensemble en société. 中：正确。共同规则促进社会共同生活。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "La liberté s'exerce :",
    options: [
      "Sans aucune limite",
      "Dans le cadre de la loi",
      "Selon l'origine",
      "Selon la religion"
    ],
    answer: 1,
    explanation: "FR : Correct. La liberté s'exerce dans le respect de la loi. 中：正确。自由必须在法律框架内行使。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "La République assure la protection :",
    options: [
      "De certains groupes",
      "De tous les citoyens",
      "Des croyants uniquement",
      "Des riches"
    ],
    answer: 1,
    explanation: "FR : Correct. La République assure la protection de tous les citoyens. 中：正确。共和国保障所有公民的保护。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "L'égalité interdit :",
    options: [
      "Toute différence",
      "Les discriminations",
      "Les opinions",
      "Les débats"
    ],
    answer: 1,
    explanation: "FR : Correct. L'égalité interdit les discriminations. 中：正确。平等禁止歧视行为。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "La loi s'applique :",
    options: [
      "Aux étrangers seulement",
      "À tous",
      "Aux fonctionnaires uniquement",
      "Aux croyants"
    ],
    answer: 1,
    explanation: "FR : Correct. La loi s'applique à tous sur le territoire. 中：正确。法律适用于所有人。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "La République française protège :",
    options: [
      "Les libertés",
      "Les discriminations",
      "Les privilèges",
      "Les exclusions"
    ],
    answer: 0,
    explanation: "FR : Correct. La République protège les libertés des citoyens. 中：正确。共和国保护公民的自由。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "Le respect mutuel est lié à :",
    options: [
      "L'égalité",
      "La hiérarchie",
      "La richesse",
      "La religion"
    ],
    answer: 0,
    explanation: "FR : Correct. Le respect mutuel est lié au principe d'égalité entre tous. 中：正确。相互尊重与人人平等原则相关。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "Les règles communes servent à :",
    options: [
      "Diviser",
      "Organiser la vie en société",
      "Exclure",
      "Imposer une religion"
    ],
    answer: 1,
    explanation: "FR : Correct. Les règles communes servent à organiser la vie en société. 中：正确。共同规则用于组织社会生活。"
  },
  {
    category: "Devise et symboles",
    type: "concept",
    question: "Un citoyen peut avoir :",
    options: [
      "Une seule opinion autorisée",
      "Des opinions différentes",
      "Une opinion imposée",
      "Aucune opinion"
    ],
    answer: 1,
    explanation: "FR : Correct. Un citoyen peut avoir des opinions différentes. 中：正确。公民可以持有不同的意见。"
  }
];