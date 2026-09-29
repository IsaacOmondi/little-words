/**
 * Data Taxonomy & Vocabulary Catalog for Toddler Learning
 * Includes 7 categories: Letters, Colors, Shapes, Animals, Everyday Objects, Body Parts, Greetings
 */

export const CATEGORIES = [
  {
    id: 'letters',
    label: 'Letters',
    icon: '🔤',
    themeColor: '#FF6B6B',
    bgColor: '#FFF0F0'
  },
  {
    id: 'colors',
    label: 'Colors',
    icon: '🎨',
    themeColor: '#4D96FF',
    bgColor: '#EFF6FF'
  },
  {
    id: 'shapes',
    label: 'Shapes',
    icon: '⭐',
    themeColor: '#FFD93D',
    bgColor: '#FFFBEB'
  },
  {
    id: 'animals',
    label: 'Animals',
    icon: '🐶',
    themeColor: '#6BCB77',
    bgColor: '#F0FDF4'
  },
  {
    id: 'objects',
    label: 'Objects',
    icon: '🚗',
    themeColor: '#FF9234',
    bgColor: '#FFF7ED'
  },
  {
    id: 'body',
    label: 'Body Parts',
    icon: '👀',
    themeColor: '#9B5DE5',
    bgColor: '#FAF5FF'
  },
  {
    id: 'greetings',
    label: 'Greetings',
    icon: '👋',
    themeColor: '#F15BB5',
    bgColor: '#FDF2F8'
  }
];

export const LEARNING_ITEMS = [
  // =========================================================================
  // 1. LETTERS (A to Z)
  // =========================================================================
  {
    id: 'letter-a',
    categoryId: 'letters',
    label: 'A a',
    subLabel: 'Apple',
    phonics: '/æ/ as in Apple',
    speechText: 'A! A is for Apple. Ah, ah, apple!',
    themeColor: '#EF4444',
    sfx: 'pop',
    svgKey: 'apple'
  },
  {
    id: 'letter-b',
    categoryId: 'letters',
    label: 'B b',
    subLabel: 'Ball',
    phonics: '/b/ as in Ball',
    speechText: 'B! B is for Ball. Buh, buh, ball!',
    themeColor: '#3B82F6',
    sfx: 'boing',
    svgKey: 'ball'
  },
  {
    id: 'letter-c',
    categoryId: 'letters',
    label: 'C c',
    subLabel: 'Cat',
    phonics: '/k/ as in Cat',
    speechText: 'C! C is for Cat. Meow!',
    themeColor: '#F59E0B',
    sfx: 'pop',
    svgKey: 'cat'
  },
  {
    id: 'letter-d',
    categoryId: 'letters',
    label: 'D d',
    subLabel: 'Dog',
    phonics: '/d/ as in Dog',
    speechText: 'D! D is for Dog. Woof woof!',
    themeColor: '#10B981',
    sfx: 'pop',
    svgKey: 'dog'
  },
  {
    id: 'letter-e',
    categoryId: 'letters',
    label: 'E e',
    subLabel: 'Elephant',
    phonics: '/e/ as in Elephant',
    speechText: 'E! E is for Elephant. Big elephant!',
    themeColor: '#8B5CF6',
    sfx: 'pop',
    svgKey: 'elephant'
  },
  {
    id: 'letter-f',
    categoryId: 'letters',
    label: 'F f',
    subLabel: 'Fish',
    phonics: '/f/ as in Fish',
    speechText: 'F! F is for Fish. Swim swim fish!',
    themeColor: '#06B6D4',
    sfx: 'bubble',
    svgKey: 'fish'
  },
  {
    id: 'letter-g',
    categoryId: 'letters',
    label: 'G g',
    subLabel: 'Giraffe',
    phonics: '/dʒ/ as in Giraffe',
    speechText: 'G! G is for Giraffe. Tall giraffe!',
    themeColor: '#EAB308',
    sfx: 'pop',
    svgKey: 'giraffe'
  },
  {
    id: 'letter-h',
    categoryId: 'letters',
    label: 'H h',
    subLabel: 'Hat',
    phonics: '/h/ as in Hat',
    speechText: 'H! H is for Hat. Put on your hat!',
    themeColor: '#EC4899',
    sfx: 'pop',
    svgKey: 'hat'
  },
  {
    id: 'letter-i',
    categoryId: 'letters',
    label: 'I i',
    subLabel: 'Igloo',
    phonics: '/ɪ/ as in Igloo',
    speechText: 'I! I is for Igloo. Brrr, cozy igloo!',
    themeColor: '#38BDF8',
    sfx: 'twinkle',
    svgKey: 'igloo'
  },
  {
    id: 'letter-j',
    categoryId: 'letters',
    label: 'J j',
    subLabel: 'Jellyfish',
    phonics: '/dʒ/ as in Jellyfish',
    speechText: 'J! J is for Jellyfish. Wiggle wiggle!',
    themeColor: '#A855F7',
    sfx: 'bubble',
    svgKey: 'jellyfish'
  },
  {
    id: 'letter-k',
    categoryId: 'letters',
    label: 'K k',
    subLabel: 'Kite',
    phonics: '/k/ as in Kite',
    speechText: 'K! K is for Kite. Fly high kite!',
    themeColor: '#F97316',
    sfx: 'twinkle',
    svgKey: 'kite'
  },
  {
    id: 'letter-l',
    categoryId: 'letters',
    label: 'L l',
    subLabel: 'Lion',
    phonics: '/l/ as in Lion',
    speechText: 'L! L is for Lion. Roar!',
    themeColor: '#EAB308',
    sfx: 'pop',
    svgKey: 'lion'
  },
  {
    id: 'letter-m',
    categoryId: 'letters',
    label: 'M m',
    subLabel: 'Monkey',
    phonics: '/m/ as in Monkey',
    speechText: 'M! M is for Monkey. Ooh ooh aah aah!',
    themeColor: '#84CC16',
    sfx: 'boing',
    svgKey: 'monkey'
  },
  {
    id: 'letter-n',
    categoryId: 'letters',
    label: 'N n',
    subLabel: 'Nest',
    phonics: '/n/ as in Nest',
    speechText: 'N! N is for Nest. Little bird nest!',
    themeColor: '#14B8A6',
    sfx: 'pop',
    svgKey: 'nest'
  },
  {
    id: 'letter-o',
    categoryId: 'letters',
    label: 'O o',
    subLabel: 'Owl',
    phonics: '/ɒ/ as in Owl',
    speechText: 'O! O is for Owl. Hoot hoot!',
    themeColor: '#6366F1',
    sfx: 'pop',
    svgKey: 'owl'
  },
  {
    id: 'letter-p',
    categoryId: 'letters',
    label: 'P p',
    subLabel: 'Penguin',
    phonics: '/p/ as in Penguin',
    speechText: 'P! P is for Penguin. Waddle waddle penguin!',
    themeColor: '#0EA5E9',
    sfx: 'pop',
    svgKey: 'penguin'
  },
  {
    id: 'letter-q',
    categoryId: 'letters',
    label: 'Q q',
    subLabel: 'Queen',
    phonics: '/kw/ as in Queen',
    speechText: 'Q! Q is for Queen. Shiny golden crown!',
    themeColor: '#D946EF',
    sfx: 'twinkle',
    svgKey: 'queen'
  },
  {
    id: 'letter-r',
    categoryId: 'letters',
    label: 'R r',
    subLabel: 'Rainbow',
    phonics: '/r/ as in Rainbow',
    speechText: 'R! R is for Rainbow. Beautiful rainbow colors!',
    themeColor: '#EC4899',
    sfx: 'twinkle',
    svgKey: 'rainbow'
  },
  {
    id: 'letter-s',
    categoryId: 'letters',
    label: 'S s',
    subLabel: 'Sun',
    phonics: '/s/ as in Sun',
    speechText: 'S! S is for Sun. Warm and bright sunshine!',
    themeColor: '#F59E0B',
    sfx: 'twinkle',
    svgKey: 'sun'
  },
  {
    id: 'letter-t',
    categoryId: 'letters',
    label: 'T t',
    subLabel: 'Tree',
    phonics: '/t/ as in Tree',
    speechText: 'T! T is for Tree. Tall green tree!',
    themeColor: '#22C55E',
    sfx: 'pop',
    svgKey: 'tree'
  },
  {
    id: 'letter-u',
    categoryId: 'letters',
    label: 'U u',
    subLabel: 'Umbrella',
    phonics: '/ʌ/ as in Umbrella',
    speechText: 'U! U is for Umbrella. Up, up umbrella!',
    themeColor: '#8B5CF6',
    sfx: 'pop',
    svgKey: 'umbrella'
  },
  {
    id: 'letter-v',
    categoryId: 'letters',
    label: 'V v',
    subLabel: 'Violin',
    phonics: '/v/ as in Violin',
    speechText: 'V! V is for Violin. Sweet music!',
    themeColor: '#F97316',
    sfx: 'twinkle',
    svgKey: 'violin'
  },
  {
    id: 'letter-w',
    categoryId: 'letters',
    label: 'W w',
    subLabel: 'Whale',
    phonics: '/w/ as in Whale',
    speechText: 'W! W is for Whale. Big friendly whale!',
    themeColor: '#0284C7',
    sfx: 'bubble',
    svgKey: 'whale'
  },
  {
    id: 'letter-x',
    categoryId: 'letters',
    label: 'X x',
    subLabel: 'Xylophone',
    phonics: '/z/ as in Xylophone',
    speechText: 'X! X is for Xylophone. Ding ding dong!',
    themeColor: '#EC4899',
    sfx: 'twinkle',
    svgKey: 'xylophone'
  },
  {
    id: 'letter-y',
    categoryId: 'letters',
    label: 'Y y',
    subLabel: 'Yo-yo',
    phonics: '/j/ as in Yo-yo',
    speechText: 'Y! Y is for Yo-yo. Up and down!',
    themeColor: '#EAB308',
    sfx: 'boing',
    svgKey: 'yoyo'
  },
  {
    id: 'letter-z',
    categoryId: 'letters',
    label: 'Z z',
    subLabel: 'Zebra',
    phonics: '/z/ as in Zebra',
    speechText: 'Z! Z is for Zebra. Striped zebra!',
    themeColor: '#475569',
    sfx: 'pop',
    svgKey: 'zebra'
  },

  // =========================================================================
  // 2. COLORS
  // =========================================================================
  {
    id: 'color-red',
    categoryId: 'colors',
    label: 'Red',
    subLabel: 'Red like an Apple',
    phonics: 'Red /rɛd/',
    speechText: 'Red! Like a juicy red apple!',
    themeColor: '#EF4444',
    sfx: 'pop',
    svgKey: 'color-red'
  },
  {
    id: 'color-blue',
    categoryId: 'colors',
    label: 'Blue',
    subLabel: 'Blue like the Ocean',
    phonics: 'Blue /bluː/',
    speechText: 'Blue! Like the big blue ocean and sky!',
    themeColor: '#3B82F6',
    sfx: 'bubble',
    svgKey: 'color-blue'
  },
  {
    id: 'color-yellow',
    categoryId: 'colors',
    label: 'Yellow',
    subLabel: 'Yellow like the Sun',
    phonics: 'Yellow /ˈjɛloʊ/',
    speechText: 'Yellow! Like the bright sunshine!',
    themeColor: '#FBBF24',
    sfx: 'twinkle',
    svgKey: 'color-yellow'
  },
  {
    id: 'color-green',
    categoryId: 'colors',
    label: 'Green',
    subLabel: 'Green like Grass',
    phonics: 'Green /ɡriːn/',
    speechText: 'Green! Like fresh green grass and trees!',
    themeColor: '#22C55E',
    sfx: 'pop',
    svgKey: 'color-green'
  },
  {
    id: 'color-orange',
    categoryId: 'colors',
    label: 'Orange',
    subLabel: 'Orange like a Fruit',
    phonics: 'Orange /ˈɔːrɪndʒ/',
    speechText: 'Orange! Yummy orange fruit!',
    themeColor: '#F97316',
    sfx: 'pop',
    svgKey: 'color-orange'
  },
  {
    id: 'color-purple',
    categoryId: 'colors',
    label: 'Purple',
    subLabel: 'Purple like Grapes',
    phonics: 'Purple /ˈpɜːrpəl/',
    speechText: 'Purple! Sweet purple grapes!',
    themeColor: '#A855F7',
    sfx: 'pop',
    svgKey: 'color-purple'
  },
  {
    id: 'color-pink',
    categoryId: 'colors',
    label: 'Pink',
    subLabel: 'Pink like a Flamingo',
    phonics: 'Pink /pɪŋk/',
    speechText: 'Pink! Pretty pink flowers!',
    themeColor: '#F472B6',
    sfx: 'twinkle',
    svgKey: 'color-pink'
  },
  {
    id: 'color-brown',
    categoryId: 'colors',
    label: 'Brown',
    subLabel: 'Brown like a Teddy Bear',
    phonics: 'Brown /braʊn/',
    speechText: 'Brown! Soft brown teddy bear!',
    themeColor: '#8D5B4C',
    sfx: 'pop',
    svgKey: 'color-brown'
  },
  {
    id: 'color-black',
    categoryId: 'colors',
    label: 'Black',
    subLabel: 'Black like the Night Sky',
    phonics: 'Black /blæk/',
    speechText: 'Black! Like the night sky with stars!',
    themeColor: '#334155',
    sfx: 'pop',
    svgKey: 'color-black'
  },
  {
    id: 'color-white',
    categoryId: 'colors',
    label: 'White',
    subLabel: 'White like a Fluffy Cloud',
    phonics: 'White /waɪt/',
    speechText: 'White! Like a soft fluffy cloud and snow!',
    themeColor: '#94A3B8',
    sfx: 'twinkle',
    svgKey: 'color-white'
  },

  // =========================================================================
  // 3. SHAPES
  // =========================================================================
  {
    id: 'shape-circle',
    categoryId: 'shapes',
    label: 'Circle',
    subLabel: 'Round and Round',
    phonics: 'Circle /ˈsɜːrkəl/',
    speechText: 'Circle! Round and round like a ball!',
    themeColor: '#EF4444',
    sfx: 'boing',
    svgKey: 'shape-circle'
  },
  {
    id: 'shape-square',
    categoryId: 'shapes',
    label: 'Square',
    subLabel: 'Four Equal Sides',
    phonics: 'Square /skwɛər/',
    speechText: 'Square! One, two, three, four equal sides!',
    themeColor: '#3B82F6',
    sfx: 'pop',
    svgKey: 'shape-square'
  },
  {
    id: 'shape-triangle',
    categoryId: 'shapes',
    label: 'Triangle',
    subLabel: 'Three Corners',
    phonics: 'Triangle /ˈtraɪæŋɡəl/',
    speechText: 'Triangle! Pointy with three corners!',
    themeColor: '#EAB308',
    sfx: 'pop',
    svgKey: 'shape-triangle'
  },
  {
    id: 'shape-star',
    categoryId: 'shapes',
    label: 'Star',
    subLabel: 'Twinkle Twinkle',
    phonics: 'Star /stɑːr/',
    speechText: 'Star! Twinkle twinkle little star, shining bright!',
    themeColor: '#F59E0B',
    sfx: 'twinkle',
    svgKey: 'shape-star'
  },
  {
    id: 'shape-heart',
    categoryId: 'shapes',
    label: 'Heart',
    subLabel: 'Full of Love',
    phonics: 'Heart /hɑːrt/',
    speechText: 'Heart! I love you with all my heart!',
    themeColor: '#EC4899',
    sfx: 'twinkle',
    svgKey: 'shape-heart'
  },
  {
    id: 'shape-rectangle',
    categoryId: 'shapes',
    label: 'Rectangle',
    subLabel: 'Long and Wide',
    phonics: 'Rectangle /ˈrɛktæŋɡəl/',
    speechText: 'Rectangle! Long and wide like a door!',
    themeColor: '#10B981',
    sfx: 'pop',
    svgKey: 'shape-rectangle'
  },
  {
    id: 'shape-oval',
    categoryId: 'shapes',
    label: 'Oval',
    subLabel: 'Like an Egg',
    phonics: 'Oval /ˈoʊvəl/',
    speechText: 'Oval! Round and stretched like an egg!',
    themeColor: '#8B5CF6',
    sfx: 'boing',
    svgKey: 'shape-oval'
  },
  {
    id: 'shape-diamond',
    categoryId: 'shapes',
    label: 'Diamond',
    subLabel: 'Sparkly Shape',
    phonics: 'Diamond /ˈdaɪəmənd/',
    speechText: 'Diamond! Like a kite in the sky!',
    themeColor: '#06B6D4',
    sfx: 'twinkle',
    svgKey: 'shape-diamond'
  },

  // =========================================================================
  // 4. ANIMALS
  // =========================================================================
  {
    id: 'animal-dog',
    categoryId: 'animals',
    label: 'Dog',
    subLabel: 'Woof Woof!',
    phonics: 'Dog /dɔːɡ/',
    speechText: 'Dog! Woof woof! Friendly puppy wagging its tail!',
    themeColor: '#F59E0B',
    sfx: 'pop',
    svgKey: 'dog'
  },
  {
    id: 'animal-cat',
    categoryId: 'animals',
    label: 'Cat',
    subLabel: 'Meow Meow!',
    phonics: 'Cat /kæt/',
    speechText: 'Cat! Meow meow! Soft little kitten!',
    themeColor: '#EC4899',
    sfx: 'pop',
    svgKey: 'cat'
  },
  {
    id: 'animal-cow',
    categoryId: 'animals',
    label: 'Cow',
    subLabel: 'Moo Moo!',
    phonics: 'Cow /kaʊ/',
    speechText: 'Cow! Moo moo! Big happy cow on the farm!',
    themeColor: '#10B981',
    sfx: 'pop',
    svgKey: 'cow'
  },
  {
    id: 'animal-duck',
    categoryId: 'animals',
    label: 'Duck',
    subLabel: 'Quack Quack!',
    phonics: 'Duck /dʌk/',
    speechText: 'Duck! Quack quack! Swimming in the pond!',
    themeColor: '#EAB308',
    sfx: 'bubble',
    svgKey: 'duck'
  },
  {
    id: 'animal-lion',
    categoryId: 'animals',
    label: 'Lion',
    subLabel: 'Roar!',
    phonics: 'Lion /ˈlaɪən/',
    speechText: 'Lion! Roar! The brave king of the jungle!',
    themeColor: '#F97316',
    sfx: 'pop',
    svgKey: 'lion'
  },
  {
    id: 'animal-elephant',
    categoryId: 'animals',
    label: 'Elephant',
    subLabel: 'Trumpet!',
    phonics: 'Elephant /ˈɛləfənt/',
    speechText: 'Elephant! Big ears and a long trunk!',
    themeColor: '#6366F1',
    sfx: 'pop',
    svgKey: 'elephant'
  },
  {
    id: 'animal-monkey',
    categoryId: 'animals',
    label: 'Monkey',
    subLabel: 'Ooh Ooh Aah Aah!',
    phonics: 'Monkey /ˈmʌŋki/',
    speechText: 'Monkey! Ooh ooh aah aah! Swinging in trees!',
    themeColor: '#84CC16',
    sfx: 'boing',
    svgKey: 'monkey'
  },
  {
    id: 'animal-bird',
    categoryId: 'animals',
    label: 'Bird',
    subLabel: 'Tweet Tweet!',
    phonics: 'Bird /bɜːrd/',
    speechText: 'Bird! Tweet tweet! Flapping pretty wings!',
    themeColor: '#0EA5E9',
    sfx: 'twinkle',
    svgKey: 'bird'
  },
  {
    id: 'animal-frog',
    categoryId: 'animals',
    label: 'Frog',
    subLabel: 'Ribbit Ribbit!',
    phonics: 'Frog /frɔːɡ/',
    speechText: 'Frog! Ribbit ribbit! Hop hop on a lily pad!',
    themeColor: '#22C55E',
    sfx: 'boing',
    svgKey: 'frog'
  },
  {
    id: 'animal-pig',
    categoryId: 'animals',
    label: 'Pig',
    subLabel: 'Oink Oink!',
    phonics: 'Pig /pɪɡ/',
    speechText: 'Pig! Oink oink! Cute curly tail!',
    themeColor: '#F472B6',
    sfx: 'pop',
    svgKey: 'pig'
  },
  {
    id: 'animal-sheep',
    categoryId: 'animals',
    label: 'Sheep',
    subLabel: 'Baa Baa!',
    phonics: 'Sheep /ʃiːp/',
    speechText: 'Sheep! Baa baa! Fluffy soft wool!',
    themeColor: '#64748B',
    sfx: 'pop',
    svgKey: 'sheep'
  },
  {
    id: 'animal-horse',
    categoryId: 'animals',
    label: 'Horse',
    subLabel: 'Neigh Neigh!',
    phonics: 'Horse /hɔːrs/',
    speechText: 'Horse! Neigh! Galloping fast!',
    themeColor: '#A16207',
    sfx: 'pop',
    svgKey: 'horse'
  },

  // =========================================================================
  // 5. EVERYDAY OBJECTS
  // =========================================================================
  {
    id: 'object-cup',
    categoryId: 'objects',
    label: 'Cup',
    subLabel: 'Drink Water',
    phonics: 'Cup /kʌp/',
    speechText: 'Cup! Sip, sip, drink some yummy water!',
    themeColor: '#3B82F6',
    sfx: 'bubble',
    svgKey: 'cup'
  },
  {
    id: 'object-spoon',
    categoryId: 'objects',
    label: 'Spoon',
    subLabel: 'Time to Eat',
    phonics: 'Spoon /spuːn/',
    speechText: 'Spoon! Yum yum, time to eat delicious food!',
    themeColor: '#10B981',
    sfx: 'pop',
    svgKey: 'spoon'
  },
  {
    id: 'object-shoes',
    categoryId: 'objects',
    label: 'Shoes',
    subLabel: 'Put on Shoes',
    phonics: 'Shoes /ʃuːz/',
    speechText: 'Shoes! Put on your shoes, let’s go outside and play!',
    themeColor: '#EC4899',
    sfx: 'pop',
    svgKey: 'shoes'
  },
  {
    id: 'object-ball',
    categoryId: 'objects',
    label: 'Ball',
    subLabel: 'Bounce Bounce',
    phonics: 'Ball /bɔːl/',
    speechText: 'Ball! Bounce, bounce, catch the bouncy ball!',
    themeColor: '#EF4444',
    sfx: 'boing',
    svgKey: 'ball'
  },
  {
    id: 'object-bed',
    categoryId: 'objects',
    label: 'Bed',
    subLabel: 'Cozy Sleep',
    phonics: 'Bed /bɛd/',
    speechText: 'Bed! Cozy and warm, time to sleep and dream!',
    themeColor: '#8B5CF6',
    sfx: 'twinkle',
    svgKey: 'bed'
  },
  {
    id: 'object-clock',
    categoryId: 'objects',
    label: 'Clock',
    subLabel: 'Tick Tock',
    phonics: 'Clock /klɒk/',
    speechText: 'Clock! Tick tock, tick tock, what time is it?',
    themeColor: '#F59E0B',
    sfx: 'pop',
    svgKey: 'clock'
  },
  {
    id: 'object-book',
    categoryId: 'objects',
    label: 'Book',
    subLabel: 'Story Time',
    phonics: 'Book /bʊk/',
    speechText: 'Book! Open the book, let’s read a fun story together!',
    themeColor: '#06B6D4',
    sfx: 'pop',
    svgKey: 'book'
  },
  {
    id: 'object-car',
    categoryId: 'objects',
    label: 'Car',
    subLabel: 'Vroom Vroom!',
    phonics: 'Car /kɑːr/',
    speechText: 'Car! Vroom, vroom! Beep beep!',
    themeColor: '#EF4444',
    sfx: 'pop',
    svgKey: 'car'
  },
  {
    id: 'object-toothbrush',
    categoryId: 'objects',
    label: 'Toothbrush',
    subLabel: 'Brush Brush',
    phonics: 'Toothbrush /ˈtuːθbrʌʃ/',
    speechText: 'Toothbrush! Brush, brush, brush your shiny teeth!',
    themeColor: '#14B8A6',
    sfx: 'bubble',
    svgKey: 'toothbrush'
  },
  {
    id: 'object-hat',
    categoryId: 'objects',
    label: 'Hat',
    subLabel: 'On Your Head',
    phonics: 'Hat /hæt/',
    speechText: 'Hat! Put a cozy hat on your head!',
    themeColor: '#F97316',
    sfx: 'pop',
    svgKey: 'hat'
  },

  // =========================================================================
  // 6. BODY PARTS
  // =========================================================================
  {
    id: 'body-eyes',
    categoryId: 'body',
    label: 'Eyes',
    subLabel: 'I can see!',
    phonics: 'Eyes /aɪz/',
    speechText: 'Eyes! Blink, blink! I can see with my two eyes!',
    themeColor: '#3B82F6',
    sfx: 'twinkle',
    svgKey: 'eyes'
  },
  {
    id: 'body-nose',
    categoryId: 'body',
    label: 'Nose',
    subLabel: 'Beep Beep!',
    phonics: 'Nose /noʊz/',
    speechText: 'Nose! Sniff, sniff, and beep beep on your nose!',
    themeColor: '#EC4899',
    sfx: 'boing',
    svgKey: 'nose'
  },
  {
    id: 'body-mouth',
    categoryId: 'body',
    label: 'Mouth',
    subLabel: 'Big Happy Smile',
    phonics: 'Mouth /maʊθ/',
    speechText: 'Mouth! Big happy smile and say cheese!',
    themeColor: '#EF4444',
    sfx: 'pop',
    svgKey: 'mouth'
  },
  {
    id: 'body-ears',
    categoryId: 'body',
    label: 'Ears',
    subLabel: 'Listen to Sound',
    phonics: 'Ears /ɪərz/',
    speechText: 'Ears! Listen to the sweet music with your ears!',
    themeColor: '#F59E0B',
    sfx: 'twinkle',
    svgKey: 'ears'
  },
  {
    id: 'body-hands',
    categoryId: 'body',
    label: 'Hands',
    subLabel: 'Clap Clap Clap!',
    phonics: 'Hands /hændz/',
    speechText: 'Hands! Clap, clap, clap your happy hands!',
    themeColor: '#10B981',
    sfx: 'pop',
    svgKey: 'hands'
  },
  {
    id: 'body-feet',
    categoryId: 'body',
    label: 'Feet',
    subLabel: 'Stomp Stomp!',
    phonics: 'Feet /fiːt/',
    speechText: 'Feet! Stomp, stomp, stomp your happy feet!',
    themeColor: '#8B5CF6',
    sfx: 'boing',
    svgKey: 'feet'
  },
  {
    id: 'body-tummy',
    categoryId: 'body',
    label: 'Tummy',
    subLabel: 'Tickle Tickle!',
    phonics: 'Tummy /ˈtʌmi/',
    speechText: 'Tummy! Tickle tickle tickle on the tummy!',
    themeColor: '#F97316',
    sfx: 'bubble',
    svgKey: 'tummy'
  },
  {
    id: 'body-head',
    categoryId: 'body',
    label: 'Head',
    subLabel: 'Nod Yes!',
    phonics: 'Head /hɛd/',
    speechText: 'Head! Nod your head yes, yes, yes!',
    themeColor: '#06B6D4',
    sfx: 'pop',
    svgKey: 'head'
  },

  // =========================================================================
  // 7. GREETINGS & POLITE WORDS
  // =========================================================================
  {
    id: 'greet-hello',
    categoryId: 'greetings',
    label: 'Hello!',
    subLabel: 'Wave Your Hand 👋',
    phonics: 'Hello /həˈloʊ/',
    speechText: 'Hello! Wave your hand and say hello to friends!',
    themeColor: '#10B981',
    sfx: 'twinkle',
    svgKey: 'wave'
  },
  {
    id: 'greet-byebye',
    categoryId: 'greetings',
    label: 'Bye-bye!',
    subLabel: 'See You Soon 👋',
    phonics: 'Bye-bye /baɪ-baɪ/',
    speechText: 'Bye-bye! See you soon, have a wonderful day!',
    themeColor: '#3B82F6',
    sfx: 'bubble',
    svgKey: 'wave'
  },
  {
    id: 'greet-please',
    categoryId: 'greetings',
    label: 'Please',
    subLabel: 'Polite Magic Word ✨',
    phonics: 'Please /pliːz/',
    speechText: 'Please! Polite magic words make everyone smile!',
    themeColor: '#8B5CF6',
    sfx: 'twinkle',
    svgKey: 'please'
  },
  {
    id: 'greet-thankyou',
    categoryId: 'greetings',
    label: 'Thank You!',
    subLabel: 'Kind & Nice 💖',
    phonics: 'Thank You /ˈθæŋk juː/',
    speechText: 'Thank you! So kind, so nice, and polite!',
    themeColor: '#EC4899',
    sfx: 'twinkle',
    svgKey: 'heart'
  },
  {
    id: 'greet-morning',
    categoryId: 'greetings',
    label: 'Good Morning!',
    subLabel: 'Rise and Shine ☀️',
    phonics: 'Good Morning /ɡʊd ˈmɔːrnɪŋ/',
    speechText: 'Good morning! Rise and shine, the sun is up!',
    themeColor: '#F59E0B',
    sfx: 'twinkle',
    svgKey: 'sun'
  },
  {
    id: 'greet-night',
    categoryId: 'greetings',
    label: 'Night Night!',
    subLabel: 'Sweet Dreams 🌙',
    phonics: 'Night Night /naɪt naɪt/',
    speechText: 'Night night! Sleep tight and sweet dreams under the moon!',
    themeColor: '#6366F1',
    sfx: 'twinkle',
    svgKey: 'moon'
  }
];
