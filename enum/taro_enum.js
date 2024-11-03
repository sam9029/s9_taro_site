// 大阿尔卡那 - 22张

const UPPER_ARCANA_MAPPER = {
  fool: {
    name: "愚人",
    description: "象征新开始与冒险，代表无拘无束的心态。",
    cover_url: "https://i.ibb.co/YRJNYvR/The-Fool.gif",
  },
  magician: {
    name: "魔术师",
    description: "代表创造力和行动力，掌握掌控局势的力量。",
    cover_url: "https://i.ibb.co/f0BFGw9/The-Magician.gif",
  },
  high_priestess: {
    name: "女祭司",
    description: "象征直觉与潜意识，代表隐藏的知识与智慧。",
    cover_url: "https://i.ibb.co/RCJG9Gg/The-High-Pristess.gif",
  },
  empress: {
    name: "皇后",
    description: "象征丰饶与母性，代表自然的生命力与爱。",
    cover_url: "https://i.ibb.co/rFRgVN0/The-Empress.gif",
  },
  emperor: {
    name: "皇帝",
    description: "象征权威与秩序，代表领导力与责任感。",
    cover_url: "https://i.ibb.co/CQhFwnL/The-Emperor.gif",
  },
  hierophant: {
    name: "教皇",
    description: "象征传统与教义，代表社会规则与精神指导。",
    cover_url: "https://i.ibb.co/mRXLRs9/The-Hierophant.gif",
  },
  lovers: {
    name: "恋人",
    description: "代表爱情、选择与和谐，象征情感关系的结合。",
    cover_url: "https://i.ibb.co/ZYq87HK/The-lovers.gif",
  },
  chariot: {
    name: "战车",
    description: "象征意志力与胜利，代表克服挑战与自律。",
    cover_url: "https://i.ibb.co/ZhY40MG/The-Chariot.gif",
  },
  strength: {
    name: "力量",
    description: "代表内在的勇气与自信，象征温和的力量。",
    cover_url: "https://i.ibb.co/88nPfqY/Strength.gif", // 更新
  },
  hermit: {
    name: "隐者",
    description: "象征内省与孤独，代表追求智慧的独立旅程。",
    cover_url: "https://i.ibb.co/y6hCTYf/The-Hermit.gif", // 更新
  },
  wheel_of_fortune: {
    name: "命运之轮",
    description: "象征命运的循环，代表变化与不可预测的力量。",
    cover_url: "https://i.ibb.co/TmG38ck/The-Wheel-of-Fortune.gif", // 更新
  },
  justice: {
    name: "正义",
    description: "象征公平与平衡，代表道德判断与因果报应。",
    cover_url: "https://i.ibb.co/NZXsLzK/Justice.gif", // 更新
  },
  hanged_man: {
    name: "倒吊人",
    description: "象征牺牲与顿悟，代表逆境中的转变与放下。",
    cover_url: "https://i.ibb.co/qjkXLzT/The-Hanged-Man.gif", // 更新
  },
  death: {
    name: "死神",
    description: "象征结束与转化，代表新的开始与重生。",
    cover_url: "https://i.ibb.co/7Nh7ym6/Death.gif", // 更新
  },
  temperance: {
    name: "节制",
    description: "象征平衡与和谐，代表节制、耐心与适度。",
    cover_url: "https://i.ibb.co/3zVvHwy/Temperance.gif", // 更新
  },
  devil: {
    name: "恶魔",
    description: "象征欲望与束缚，代表内心的阴影与诱惑。",
    cover_url: "https://i.ibb.co/PxN5NsW/The-Devil.gif", // 更新
  },
  tower: {
    name: "塔",
    description: "象征突然的改变与冲击，代表危机中的觉醒。",
    cover_url: "https://i.ibb.co/2ZjJdKj/The-Tower.gif", // 更新
  },
  star: {
    name: "星星",
    description: "象征希望与启示，代表未来的指引与治愈。",
    cover_url: "https://i.ibb.co/MBCQG9g/The-Star.gif", // 更新
  },
  moon: {
    name: "月亮",
    description: "象征迷惑与幻想，代表潜意识中的恐惧与不确定。",
    cover_url: "https://i.ibb.co/sJ6hKvw/The-Moon.gif", // 更新
  },
  sun: {
    name: "太阳",
    description: "象征成功与快乐，代表光明、活力与正面的能量。",
    cover_url: "https://i.ibb.co/yYmXWzC/The-Sun.gif", // 更新
  },
  judgment: {
    name: "审判",
    description: "象征重生与觉醒，代表人生的审视与决断。",
    cover_url: "https://i.ibb.co/LJ2H93h/Judgement.gif", // 更新
  },
  world: {
    name: "世界",
    description: "象征圆满与成就，代表旅程的终点与整体的平衡。",
    cover_url: "https://i.ibb.co/9vS3yg0/The-World.gif", // 更新
  },
};

// 小阿卡那 - 圣杯 - 14张
const CUPS_MAPPER = {
  ace_of_cups: {
    name: "圣杯王牌",
    description: "象征情感的开始，代表新的情感机会与幸福。",
    cover_url: "https://i.ibb.co/wwTnsFQ/Ace-Of-Cups.jpg", // 更新
  },
  two_of_cups: {
    name: "圣杯二",
    description: "象征爱情与伙伴，代表和谐与亲密关系的建立。",
    cover_url: "https://i.ibb.co/FhwfLLf/Two-Of-Cups.jpg", // 更新
  },
  three_of_cups: {
    name: "圣杯三",
    description: "象征友谊与庆祝，代表团体中的快乐与分享。",
    cover_url: "https://i.ibb.co/mz5RGFH/Three-Of-Cups.jpg", // 更新
  },
  four_of_cups: {
    name: "圣杯四",
    description: "象征沉思与不满，代表情感上的停滞与犹豫。",
    cover_url: "https://i.ibb.co/qxgWC6v/Four-Of-Cups.jpg", // 更新
  },
  five_of_cups: {
    name: "圣杯五",
    description: "象征失望与悔恨，代表情感的失落与痛苦。",
    cover_url: "https://i.ibb.co/ZzwnVDW/Five-Of-Cups.jpg", // 更新
  },
  six_of_cups: {
    name: "圣杯六",
    description: "象征回忆与怀旧，代表过去的快乐与童年时光。",
    cover_url: "https://i.ibb.co/vsgFMdX/Six-Of-Cups.jpg", // 更新
  },
  seven_of_cups: {
    name: "圣杯七",
    description: "象征幻想与选择，代表面临多种诱惑与决定。",
    cover_url: "https://i.ibb.co/M1vzkV2/Seven-Of-Cups.jpg", // 更新
  },
  eight_of_cups: {
    name: "圣杯八",
    description: "象征放弃与转变，代表对不满的局面做出决定。",
    cover_url: "https://i.ibb.co/k5cJ1pz/Eight-Of-Cups.jpg", // 更新
  },
  nine_of_cups: {
    name: "圣杯九",
    description: "象征满足与愿望，代表梦想成真与情感上的圆满。",
    cover_url: "https://i.ibb.co/yWcYPCz/Nine-Of-Cups.jpg", // 更新
  },
  ten_of_cups: {
    name: "圣杯十",
    description: "象征幸福与和谐，代表家庭的幸福与满足。",
    cover_url: "https://i.ibb.co/61KGXpJ/Ten-Of-Cups.jpg", // 更新
  },
  page_of_cups: {
    name: "圣杯侍者",
    description: "象征情感的表达，代表新的情感体验与创意。",
    cover_url: "https://i.ibb.co/jynSGKG/Page-Of-Cups.jpg", // 更新
  },
  knight_of_cups: {
    name: "圣杯骑士",
    description: "象征浪漫与追求，代表感性的行动与情感的追求。",
    cover_url: "https://i.ibb.co/KjQffDc/Knight-Of-Cups.jpg", // 更新
  },
  queen_of_cups: {
    name: "圣杯王后",
    description: "象征温柔与同理心，代表情感上的成熟与理解。",
    cover_url: "https://i.ibb.co/9n9d7d6/Queen-Of-Cups.jpg", // 更新
  },
  king_of_cups: {
    name: "圣杯国王",
    description: "象征情感的平衡，代表内心的安定与领导力。",
    cover_url: "https://i.ibb.co/gDkCm3z/King-Of-Cups.jpg", // 更新
  },
};

// 小阿卡那 - 宝剑  - 14张
const SWORDS_MAPPER = {
  ace_of_swords: {
    name: "宝剑王牌",
    description: "象征清晰与真理，代表新想法与决定的力量。",
    cover_url: "https://i.ibb.co/YPjzw76/Ace-Of-Swords.jpg", // 更新
  },
  two_of_swords: {
    name: "宝剑二",
    description: "象征困境与选择，代表面对冲突时的犹豫不决。",
    cover_url: "https://i.ibb.co/z4svnyj/Two-Of-Swords.jpg", // 更新
  },
  three_of_swords: {
    name: "宝剑三",
    description: "象征痛苦与分离，代表心碎与情感上的创伤。",
    cover_url: "https://i.ibb.co/ZLhNLsP/Three-Of-Swords.jpg", // 更新
  },
  four_of_swords: {
    name: "宝剑四",
    description: "象征休息与恢复，代表内心的平静与修养。",
    cover_url: "https://i.ibb.co/dcGyvLp/Four-Of-Swords.jpg", // 更新
  },
  five_of_swords: {
    name: "宝剑五",
    description: "象征冲突与失败，代表不光彩的胜利与内心的悔恨。",
    cover_url: "https://i.ibb.co/Fq7Ljqf/Five-Of-Swords.jpg", // 更新
  },
  six_of_swords: {
    name: "宝剑六",
    description: "象征过渡与前进，代表逃离困境与新的开始。",
    cover_url: "https://i.ibb.co/9vBbr3c/Six-Of-Swords.jpg", // 更新
  },
  seven_of_swords: {
    name: "宝剑七",
    description: "象征欺骗与策略，代表隐藏的动机与秘密行动。",
    cover_url: "https://i.ibb.co/RY7SsRD/Seven-Of-Swords.jpg", // 更新
  },
  eight_of_swords: {
    name: "宝剑八",
    description: "象征束缚与恐惧，代表内心的限制与无助感。",
    cover_url: "https://i.ibb.co/HPWyZVG/Eight-Of-Swords.jpg", // 更新
  },
  nine_of_swords: {
    name: "宝剑九",
    description: "象征焦虑与失眠，代表精神上的困扰与恐惧。",
    cover_url: "https://i.ibb.co/Bsns7YN/Nine-Of-Swords.jpg", // 更新
  },
  ten_of_swords: {
    name: "宝剑十",
    description: "象征结束与痛苦，代表突然的结局与背叛。",
    cover_url: "https://i.ibb.co/hHWDfms/Ten-Of-Swords.jpg", // 更新
  },
  page_of_swords: {
    name: "宝剑侍者",
    description: "象征好奇与警觉，代表寻找真相与新的洞察力。",
    cover_url: "https://i.ibb.co/mBshtzV/Page-Of-Swords.jpg", // 更新
  },
  knight_of_swords: {
    name: "宝剑骑士",
    description: "象征勇敢与果断，代表快速行动与强大的决心。",
    cover_url: "https://i.ibb.co/Tty7R19/Knight-Of-Swords.jpg", // 更新
  },
  queen_of_swords: {
    name: "宝剑王后",
    description: "象征理智与清晰，代表智慧与情感上的独立。",
    cover_url: "https://i.ibb.co/zJZ2ZCk/Queen-Of-Swords.jpg", // 更新
  },
  king_of_swords: {
    name: "宝剑国王",
    description: "象征公正与智慧，代表理性的判断与决策力。",
    cover_url: "https://i.ibb.co/R2cNLHL/King-Of-Swords.jpg", // 更新
  },
};

// 小阿卡那 - 钱币  - 14张
const PENTACLES_MAPPER = {
  ace_of_pentacles: {
    name: "钱币王牌",
    description: "象征物质的成功，代表新的财务机会与丰收。",
    cover_url: "https://i.ibb.co/k5Ct6t6/Ace-Of-Pentacles.jpg", // 更新
  },
  two_of_pentacles: {
    name: "钱币二",
    description: "象征平衡与灵活，代表在变化中的适应与管理。",
    cover_url: "https://i.ibb.co/m07pmz1/Two-Of-Pentacles.jpg", // 更新
  },
  three_of_pentacles: {
    name: "钱币三",
    description: "象征合作与技能，代表团队合作与专业能力的展示。",
    cover_url: "https://i.ibb.co/54hYN5D/Three-Of-Pentacles.jpg", // 更新
  },
  four_of_pentacles: {
    name: "钱币四",
    description: "象征控制与保守，代表财务上的谨慎与固守。",
    cover_url: "https://i.ibb.co/VT7kGFN/Four-Of-Pentacles.jpg", // 更新
  },
  five_of_pentacles: {
    name: "钱币五",
    description: "象征贫困与失落，代表物质上的匮乏与困境。",
    cover_url: "https://i.ibb.co/QNNxCFF/Five-Of-Pentacles.jpg", // 更新
  },
  six_of_pentacles: {
    name: "钱币六",
    description: "象征给予与接收，代表慷慨与分享财富。",
    cover_url: "https://i.ibb.co/vB9ckT9/Fix-Of-Pentacles.jpg", // 更新
  },
  seven_of_pentacles: {
    name: "钱币七",
    description: "象征耐心与评估，代表长时间努力后的等待与回报。",
    cover_url: "https://i.ibb.co/g6HnpN5/Seven-Of-Pentacles.jpg", // 更新
  },
  eight_of_pentacles: {
    name: "钱币八",
    description: "象征勤奋与专注，代表对技能与工作的精进。",
    cover_url: "https://i.ibb.co/KqHKH0Q/Eight-Of-Pentacles.jpg", // 更新
  },
  nine_of_pentacles: {
    name: "钱币九",
    description: "象征独立与财富，代表物质上的享受与成就感。",
    cover_url: "https://i.ibb.co/GMCDBNm/Nine-Of-Pentacles.jpg", // 更新
  },
  ten_of_pentacles: {
    name: "钱币十",
    description: "象征财富与传承，代表家庭的繁荣与物质上的安全感。",
    cover_url: "https://i.ibb.co/8mBwGbc/Ten-Of-Pentacles.jpg", // 更新
  },
  page_of_pentacles: {
    name: "钱币侍者",
    description: "象征学习与潜力，代表物质世界中的新机会与成长。",
    cover_url: "https://i.ibb.co/nz6NZ7Z/Page-Of-Pentacles.jpg", // 更新
  },
  knight_of_pentacles: {
    name: "钱币骑士",
    description: "象征勤奋与责任，代表稳定、专注与务实的行动。",
    cover_url: "https://i.ibb.co/M63X6Rc/Knight-Of-Pentacles.jpg", // 更新
  },
  queen_of_pentacles: {
    name: "钱币王后",
    description: "象征母性与关怀，代表物质世界中的照顾与稳定。",
    cover_url: "https://i.ibb.co/gDkb2NY/Queen-Of-Pentacles.jpg", // 更新
  },
  king_of_pentacles: {
    name: "钱币国王",
    description: "象征财富与成就，代表物质上的成功与稳固的基础。",
    cover_url: "https://i.ibb.co/QvpqqZ1/King-Of-Pentacles.jpg", // 更新
  },
};

// 小阿卡那 - 权杖  - 14张
const WANDS_MAPPER = {
  ace_of_wands: {
    name: "权杖王牌",
    description: "象征新机会与创造力，代表行动的开始。",
    cover_url: "https://i.ibb.co/v1kY51N/Ace-Of-Wands.jpg", // 更新
  },
  two_of_wands: {
    name: "权杖二",
    description: "象征规划与决定，代表等待机会的到来。",
    cover_url: "https://i.ibb.co/K00ZBCt/Tow-Of-Wands.jpg", // 更新
  },
  three_of_wands: {
    name: "权杖三",
    description: "象征远见与扩展，代表积极的探索与前进。",
    cover_url: "https://i.ibb.co/hV77J5D/Three-Of-Wands.jpg", // 更新
  },
  four_of_wands: {
    name: "权杖四",
    description: "象征庆祝与安定，代表家与社区的支持。",
    cover_url: "https://i.ibb.co/pR7VXKB/Four-Of-Wands.jpg", // 更新
  },
  five_of_wands: {
    name: "权杖五",
    description: "象征冲突与竞争，代表克服困难的挑战。",
    cover_url: "https://i.ibb.co/2vXFWtr/Five-Of-Wands.jpg", // 更新
  },
  six_of_wands: {
    name: "权杖六",
    description: "象征胜利与认可，代表公众的赞誉与成功。",
    cover_url: "https://i.ibb.co/BV5hQwm/Six-Of-Wands.jpg", // 更新
  },
  seven_of_wands: {
    name: "权杖七",
    description: "象征防御与坚持，代表面对挑战时的勇气。",
    cover_url: "https://i.ibb.co/svD2ncw/Seven-Of-Wands.jpg", // 更新
  },
  eight_of_wands: {
    name: "权杖八",
    description: "象征迅速的行动，代表事情发展的加速。",
    cover_url: "https://i.ibb.co/88Rd6Gt/Eight-Of-Wands.jpg", // 更新
  },
  nine_of_wands: {
    name: "权杖九",
    description: "象征韧性与警惕，代表即将克服的最后障碍。",
    cover_url: "https://i.ibb.co/y568fLx/Nine-Of-Wands.jpg", // 更新
  },
  ten_of_wands: {
    name: "权杖十",
    description: "象征负担与责任，代表过度的压力与承担。",
    cover_url: "https://i.ibb.co/QYPYTSj/Ten-Of-Wands.jpg", // 更新
  },
  page_of_wands: {
    name: "权杖侍者",
    description: "象征热情与好奇，代表冒险的精神与启程。",
    cover_url: "https://i.ibb.co/dKCnfCq/Page-Of-Wands.jpg", // 更新
  },
  knight_of_wands: {
    name: "权杖骑士",
    description: "象征冲劲与行动，代表大胆的决定与快速前进。",
    cover_url: "https://i.ibb.co/5FVhLkx/Knight-Of-Wands.jpg", // 更新
  },
  queen_of_wands: {
    name: "权杖王后",
    description: "象征自信与魅力，代表领导能力与独立。",
    cover_url: "https://i.ibb.co/cDGF1TM/Queen-Of-Wands.jpg", // 更新
  },
  king_of_wands: {
    name: "权杖国王",
    description: "象征权威与远见，代表战略思维与领导力。",
    cover_url: "https://i.ibb.co/QcbPznV/King-Of-Wands.jpg", // 更新
  },
};

//  78张
const TARO_MAPPER = {
  ...UPPER_ARCANA_MAPPER,
  ...CUPS_MAPPER,
  ...SWORDS_MAPPER,
  ...PENTACLES_MAPPER,
  ...WANDS_MAPPER,
};

const TARO_POSITION = {
  uprightPosition: "正位",
  reversedPosition: "逆位",
};

const TARO_KEY_POSITION = Object.keys(TARO_POSITION);
const TARO_KEY_MAPPER = Object.keys(TARO_MAPPER);

const TARO_MAPPER_LEN = TARO_KEY_MAPPER.length;
