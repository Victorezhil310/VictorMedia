export interface ToolMeta {
  slug: string;
  name: string;
  category: 'Calculators' | 'Converters' | 'Text Tools' | 'Developer Tools' | 'Image Tools' | 'Generators' | 'Time Tools';
  shortDescription: string;
  iconName: string;
  keywords: string[];
  popular?: boolean;
  featured?: boolean;
  howToUse: string[];
  features: string[];
  faq: { question: string; answer: string }[];
}

export const CATEGORIES = [
  { name: 'Calculators', description: 'Financial, health, date, and mathematical calculators.', icon: 'Calculator' },
  { name: 'Converters', description: 'Unit, length, mass, temperature, and data converters.', icon: 'RefreshCw' },
  { name: 'Text Tools', description: 'Word counter, case switcher, line deduplicator, and formatters.', icon: 'FileText' },
  { name: 'Developer Tools', description: 'JSON beautifiers, encoders, decoders, and code utilities.', icon: 'Code' },
  { name: 'Image Tools', description: 'QR generator, image compressor, format converter, and resizer.', icon: 'Image' },
  { name: 'Generators', description: 'Secure password generators, random numbers, and utilities.', icon: 'Zap' },
  { name: 'Time Tools', description: 'Precision stopwatch, countdown timers, and time math.', icon: 'Clock' },
] as const;

export const TOOLS_REGISTRY: ToolMeta[] = [
  // --- CALCULATORS ---
  {
    slug: 'calculator',
    name: 'Basic Calculator',
    category: 'Calculators',
    shortDescription: 'Standard online web calculator for arithmetic, calculations, memory operations, and percentage math.',
    iconName: 'Calculator',
    keywords: ['basic calculator', 'online calculator', 'math calculator', 'simple calculator'],
    popular: true,
    featured: true,
    howToUse: [
      'Enter numbers using your keyboard or click on the display buttons.',
      'Select your operation: Addition (+), Subtraction (-), Multiplication (×), or Division (÷).',
      'Press Equals (=) or Hit Enter on your keyboard to view instant results.',
      'Use the (C) clear key to reset calculations or (CE) to clear current entry.'
    ],
    features: [
      'Full keyboard support for lightning-fast calculations.',
      'History track showing recent calculations.',
      'Responsive design for mobile and desktop screens.'
    ],
    faq: [
      { question: 'Does this calculator store my data?', answer: 'No, all calculations are performed locally in your browser session for maximum privacy.' },
      { question: 'Can I use keyboard shortcuts?', answer: 'Yes! Numbers, operators (+, -, *, /), Enter for equals, and Backspace/Escape are fully supported.' }
    ]
  },
  {
    slug: 'scientific-calculator',
    name: 'Scientific Calculator',
    category: 'Calculators',
    shortDescription: 'Advanced scientific math calculator with trigonometry (sin, cos, tan), exponents, logarithms, and powers.',
    iconName: 'Cpu',
    keywords: ['scientific calculator', 'trigonometry calculator', 'log calculator', 'sin cos tan online'],
    popular: true,
    featured: true,
    howToUse: [
      'Toggle Radians or Degrees mode according to your mathematical requirements.',
      'Enter expressions including sine, cosine, tangent, square root (√), or power (^).',
      'Press (=) to compute complex mathematical expressions instantly.'
    ],
    features: [
      'Trigonometric functions (sin, cos, tan, asin, acos, atan).',
      'Logarithmic operations (log, ln) and exponential powers.',
      'Constants like Pi (π) and Euler\'s number (e).'
    ],
    faq: [
      { question: 'Does it support Radians and Degrees?', answer: 'Yes, you can toggle seamlessly between DEG and RAD modes.' }
    ]
  },
  {
    slug: 'percentage-calculator',
    name: 'Percentage Calculator',
    category: 'Calculators',
    shortDescription: 'Calculate percentages, percentage change, ratios, and value differences instantly.',
    iconName: 'Percent',
    keywords: ['percentage calculator', 'calculate percentage', 'percent change calculator'],
    popular: true,
    howToUse: [
      'Choose what you want to calculate (What is X% of Y? X is what % of Y? Percentage increase/decrease).',
      'Fill in the target numbers in the input boxes.',
      'The exact calculation and step-by-step breakdown will update live.'
    ],
    features: [
      '3-in-1 multi percentage calculation modes.',
      'Real-time automatic calculation updates.',
      'Shows percentage increase/decrease difference.'
    ],
    faq: [
      { question: 'How do I calculate a percentage increase?', answer: 'Select the Percentage Increase/Decrease tab, input your initial value and final value, and the percentage delta will be calculated.' }
    ]
  },
  {
    slug: 'discount-calculator',
    name: 'Discount Calculator',
    category: 'Calculators',
    shortDescription: 'Calculate final prices, savings, and sales tax after discount percentage deductions.',
    iconName: 'Tag',
    keywords: ['discount calculator', 'sales tax calculator', 'shopping discount finder'],
    howToUse: [
      'Enter the original retail price of the item.',
      'Input the discount percentage (e.g. 20% OFF) or fixed dollar reduction.',
      'Optionally specify local sales tax rate to get the final checkout price.'
    ],
    features: [
      'Calculates total dollar savings and net final price.',
      'Supports tax calculation additions.',
      'Instant breakdown of price reductions.'
    ],
    faq: [
      { question: 'Can I add tax after discount?', answer: 'Yes, the discount calculator applies tax after deducting discount savings.' }
    ]
  },
  {
    slug: 'age-calculator',
    name: 'Age Calculator',
    category: 'Calculators',
    shortDescription: 'Find your exact age in years, months, weeks, days, hours, minutes, and next birthday countdown.',
    iconName: 'Calendar',
    keywords: ['age calculator', 'exact age finder', 'date of birth age', 'birthday countdown'],
    popular: true,
    howToUse: [
      'Select your Date of Birth in the date picker.',
      'Select the target date (defaults to today).',
      'View your precise age in years, months, days, and total minutes lived.'
    ],
    features: [
      'Exact breakdown by years, months, and days.',
      'Calculates days until your upcoming birthday.',
      'Displays total days, hours, and minutes lived.'
    ],
    faq: [
      { question: 'Does it take leap years into account?', answer: 'Yes, leap years are fully calculated in the date math engine.' }
    ]
  },
  {
    slug: 'date-difference',
    name: 'Date Difference Calculator',
    category: 'Calculators',
    shortDescription: 'Calculate the total days, business days, and duration between any two dates.',
    iconName: 'CalendarRange',
    keywords: ['date difference calculator', 'days between dates', 'business day counter'],
    howToUse: [
      'Select your Start Date.',
      'Select your End Date.',
      'Click Calculate to see total calendar days, weeks, and months between dates.'
    ],
    features: [
      'Total calendar day count.',
      'Calculates full weeks and remaining days.',
      'Includes option to count or exclude end date.'
    ],
    faq: [
      { question: 'Can I calculate past and future dates?', answer: 'Yes, you can select any historical or future dates.' }
    ]
  },
  {
    slug: 'bmi-calculator',
    name: 'BMI Calculator',
    category: 'Calculators',
    shortDescription: 'Calculate Body Mass Index (BMI) using metric (cm/kg) or imperial (in/lbs) units with health status indicators.',
    iconName: 'Activity',
    keywords: ['bmi calculator', 'body mass index calculator', 'health bmi finder', 'ideal weight'],
    popular: true,
    featured: true,
    howToUse: [
      'Choose Metric (cm, kg) or Imperial (feet/inches, lbs) units.',
      'Enter your height and current weight.',
      'View your Body Mass Index (BMI) value, category status, and healthy weight range.'
    ],
    features: [
      'Supports both metric and imperial measurements.',
      'Color-coded category scale (Underweight, Normal, Overweight, Obese).',
      'Provides standard WHO weight category reference.'
    ],
    faq: [
      { question: 'Is this medical advice?', answer: 'No. BMI is an indicator for general informational purposes. Please consult a health professional for clinical health evaluation.' }
    ]
  },
  {
    slug: 'time-calculator',
    name: 'Time Calculator',
    category: 'Calculators',
    shortDescription: 'Add, subtract, and multiply durations in hours, minutes, and seconds.',
    iconName: 'Clock',
    keywords: ['time calculator', 'add hours and minutes', 'duration calculator'],
    howToUse: [
      'Enter Time 1 (Hours : Minutes : Seconds).',
      'Select Add (+) or Subtract (-).',
      'Enter Time 2 and view total combined duration.'
    ],
    features: [
      'Full precision for hours, minutes, and seconds.',
      'Converts total time to hours, total minutes, or total seconds.'
    ],
    faq: [
      { question: 'Can I add multiple work shifts?', answer: 'Yes! Use the time adder mode to sum up shift logs.' }
    ]
  },

  // --- CONVERTERS ---
  {
    slug: 'unit-converter',
    name: 'Unit Converter',
    category: 'Converters',
    shortDescription: 'All-in-one universal conversion tool for length, mass, temperature, area, volume, and data.',
    iconName: 'RefreshCw',
    keywords: ['unit converter', 'universal converter', 'measurement converter'],
    popular: true,
    featured: true,
    howToUse: [
      'Select the measurement category (Length, Weight, Temperature, Data).',
      'Input the numerical value you wish to convert.',
      'Choose input unit and target output unit for instant multi-unit conversion.'
    ],
    features: [
      'Instant conversion across multiple metric & imperial units.',
      'Live dynamic updates as you type.',
      'Swap units button for instant reverse conversion.'
    ],
    faq: [
      { question: 'Are these conversion ratios accurate?', answer: 'Yes, all conversion factors adhere to standard NIST / ISO international metrics.' }
    ]
  },
  {
    slug: 'length-converter',
    name: 'Length Converter',
    category: 'Converters',
    shortDescription: 'Convert between meters, kilometers, centimeters, millimeters, feet, inches, yards, and miles.',
    iconName: 'Ruler',
    keywords: ['length converter', 'meters to feet', 'inches to cm', 'kilometers to miles'],
    howToUse: [
      'Enter the length value.',
      'Select the starting unit (e.g., Inches).',
      'View the equivalent length converted into 8+ standard length metrics.'
    ],
    features: ['Metric to imperial length conversions.', 'Instant multi-unit comparison table.'],
    faq: [{ question: 'How many inches are in a meter?', answer: '1 meter equals 39.3701 inches.' }]
  },
  {
    slug: 'weight-converter',
    name: 'Weight Converter',
    category: 'Converters',
    shortDescription: 'Convert mass and weight between kilograms, grams, milligrams, pounds, ounces, and tons.',
    iconName: 'Scale',
    keywords: ['weight converter', 'kg to lbs', 'grams to ounces', 'mass converter'],
    howToUse: ['Enter weight numerical value.', 'Select From and To mass units.', 'Copy converted weight with 1-click.'],
    features: ['Precision conversions up to 6 decimal places.', 'High capacity mass units (Metric Ton, US Ton).'],
    faq: [{ question: 'How many pounds are in 1 kg?', answer: '1 kilogram equals 2.20462 pounds.' }]
  },
  {
    slug: 'temperature-converter',
    name: 'Temperature Converter',
    category: 'Converters',
    shortDescription: 'Convert temperatures between Celsius (°C), Fahrenheit (°F), and Kelvin (K).',
    iconName: 'Thermometer',
    keywords: ['temperature converter', 'celsius to fahrenheit', 'fahrenheit to celsius', 'kelvin converter'],
    howToUse: ['Input temperature value.', 'Choose starting temperature scale.', 'View instant output across all 3 primary scales.'],
    features: ['Includes exact formulas breakdown.', 'Handles negative temperatures below zero.'],
    faq: [{ question: 'What is the formula for Celsius to Fahrenheit?', answer: 'Fahrenheit = (Celsius × 9/5) + 32.' }]
  },
  {
    slug: 'data-converter',
    name: 'Data Storage Converter',
    category: 'Converters',
    shortDescription: 'Convert data units between Bytes (B), Kilobytes (KB), Megabytes (MB), Gigabytes (GB), and Terabytes (TB).',
    iconName: 'Database',
    keywords: ['data storage converter', 'mb to gb', 'gb to tb', 'bytes to megabytes'],
    howToUse: ['Enter the data amount.', 'Select Decimal (1000) or Binary (1024 / KiB) conversion standard.', 'View full data scale.'],
    features: ['Supports decimal (1000 Bytes = 1 KB) and binary (1024 Bytes = 1 KiB).', 'Instant download/upload size estimate.'],
    faq: [{ question: 'What is the difference between GB and GiB?', answer: '1 GB (Gigabyte) uses decimal 10^9 bytes (1,000,000,000 B), whereas 1 GiB (Gibibyte) uses binary 2^30 bytes (1,073,741,824 B).' }]
  },

  // --- TEXT TOOLS ---
  {
    slug: 'word-counter',
    name: 'Word Counter',
    category: 'Text Tools',
    shortDescription: 'Count words, characters, sentences, paragraphs, reading time, and keyword frequency density.',
    iconName: 'FileText',
    keywords: ['word counter', 'character counter online', 'reading time estimator', 'keyword density'],
    popular: true,
    featured: true,
    howToUse: [
      'Paste or type text into the text area.',
      'View live counts for Words, Characters (with & without spaces), Sentences, and Paragraphs.',
      'Check estimated Reading Time and Speaking Time stats.'
    ],
    features: [
      'Real-time live text analysis as you type.',
      'Establishes top keyword density frequencies.',
      '1-click Clear and Copy buttons.'
    ],
    faq: [{ question: 'Is there a limit on text length?', answer: 'No, VictorMedia word counter can handle large documents and articles effortlessly.' }]
  },
  {
    slug: 'character-counter',
    name: 'Character Counter',
    category: 'Text Tools',
    shortDescription: 'Exact character, space, line, and byte size counter for social media posts, SMS, and meta tags.',
    iconName: 'Hash',
    keywords: ['character counter', 'letter count', 'tweet character limit', 'meta title length'],
    howToUse: ['Paste text into the field.', 'View total character count along with Twitter/X and SEO meta title indicator bars.'],
    features: ['Visual limit meters for Twitter (280 chars), Meta Title (60 chars), and Description (160 chars).'],
    faq: [{ question: 'Does character count include spaces?', answer: 'Both total characters (with spaces) and space-free counts are shown.' }]
  },
  {
    slug: 'case-converter',
    name: 'Case Converter',
    category: 'Text Tools',
    shortDescription: 'Convert text case instantly between UPPERCASE, lowercase, Title Case, Sentence case, camelCase, and slugify.',
    iconName: 'Type',
    keywords: ['case converter', 'uppercase to lowercase', 'title case generator', 'slugify online'],
    popular: true,
    howToUse: ['Enter or paste text.', 'Click your desired case button (Upper, Lower, Title, Sentence, Camel, Kebab/Slug).', 'Copy converted text.'],
    features: ['Supports 6+ text case styles.', 'Preserves original text formatting.'],
    faq: [{ question: 'What is Title Case?', answer: 'Title Case capitalizes the first letter of every principal word in your sentence.' }]
  },
  {
    slug: 'remove-duplicate-lines',
    name: 'Remove Duplicate Lines',
    category: 'Text Tools',
    shortDescription: 'Remove duplicate lines from text lists, sort lines alphabetically, and clean up empty spaces.',
    iconName: 'ListFilter',
    keywords: ['remove duplicate lines', 'deduplicate list', 'sort list online', 'clean duplicate text'],
    howToUse: ['Paste list of items line by line.', 'Configure options (Case Sensitive, Sort Alphabetically, Trim Lines).', 'Click Remove Duplicates.'],
    features: ['Case-sensitive or insensitive matching.', 'Alphabetical or line-length sorting options.', 'Displays total duplicate count removed.'],
    faq: [{ question: 'Can I sort lines alphabetically?', answer: 'Yes, check the "Sort Alphabetically" box before cleaning your list.' }]
  },
  {
    slug: 'text-formatter',
    name: 'Text Formatter',
    category: 'Text Tools',
    shortDescription: 'Clean extra whitespace, trim leading/trailing spaces, fix punctuation, and normalize text paragraphs.',
    iconName: 'AlignLeft',
    keywords: ['text formatter', 'clean extra spaces', 'normalize text', 'fix whitespace'],
    howToUse: ['Paste messy text with extra linebreaks or double spaces.', 'Choose cleanup options.', 'Click Format Text.'],
    features: ['Removes double spaces and empty lines.', 'Trims trailing line spaces.'],
    faq: [{ question: 'Will this affect line breaks?', answer: 'You can choose whether to preserve or remove empty line breaks.' }]
  },

  // --- DEVELOPER TOOLS ---
  {
    slug: 'json-formatter',
    name: 'JSON Formatter',
    category: 'Developer Tools',
    shortDescription: 'Prettify, format, clean, collapse, and beautify raw JSON code strings.',
    iconName: 'Code',
    keywords: ['json formatter', 'json beautifier', 'json prettify', 'format json online'],
    popular: true,
    featured: true,
    howToUse: ['Paste raw or unformatted JSON code into the editor.', 'Select indentation (2 spaces, 4 spaces, or Minified).', 'Click Format JSON.'],
    features: ['Indentation control (2 spaces, 4 spaces, Tab, Minify).', '1-click Copy formatted JSON.', 'Syntax validation feedback.'],
    faq: [{ question: 'Is my JSON uploaded to a server?', answer: 'No, all formatting is executed entirely inside your browser JavaScript engine.' }]
  },
  {
    slug: 'json-validator',
    name: 'JSON Validator',
    category: 'Developer Tools',
    shortDescription: 'Validate JSON syntax, detect parse errors, locate invalid characters, and verify payload schemas.',
    iconName: 'CheckCircle',
    keywords: ['json validator', 'json lint', 'check json syntax', 'valid json checker'],
    howToUse: ['Paste your JSON string.', 'Click Validate JSON.', 'If invalid, exact error position and line details will be displayed.'],
    features: ['Line and position error indicator.', 'Validates RFC 8259 compliance.'],
    faq: [{ question: 'How do I fix unexpected token errors?', answer: 'Check for missing double quotes around keys or trailing commas at the end of objects.' }]
  },
  {
    slug: 'base64',
    name: 'Base64 Encoder / Decoder',
    category: 'Developer Tools',
    shortDescription: 'Encode plain text strings into Base64 format or decode Base64 back into readable text.',
    iconName: 'Binary',
    keywords: ['base64 encoder', 'base64 decoder', 'encode base64', 'decode base64 online'],
    popular: true,
    howToUse: ['Select Encode or Decode mode.', 'Type or paste input string.', 'View instant converted result.'],
    features: ['UTF-8 encoding support.', 'Error detection for invalid Base64 decoding.'],
    faq: [{ question: 'Is Base64 encryption?', answer: 'No, Base64 is an encoding format for binary data representation, not encryption.' }]
  },
  {
    slug: 'url-encoder',
    name: 'URL Encoder / Decoder',
    category: 'Developer Tools',
    shortDescription: 'Encode special characters for URL query strings or decode percent-encoded URLs.',
    iconName: 'Link',
    keywords: ['url encoder', 'url decoder', 'percent encoding', 'encodeURI online'],
    howToUse: ['Paste URL or query string.', 'Select Encode (encodeURIComponent) or Decode.', 'Copy URL output.'],
    features: ['Handles URI components and full URL structures.', 'Sanitizes special query characters.'],
    faq: [{ question: 'Why encode URLs?', answer: 'Encoding ensures special characters like spaces, &, ?, and = do not break HTTP requests.' }]
  },

  // --- IMAGE TOOLS ---
  {
    slug: 'qr-generator',
    name: 'QR Code Generator',
    category: 'Image Tools',
    shortDescription: 'Generate custom QR codes for website URLs, Wi-Fi networks, text messages, and email addresses.',
    iconName: 'QrCode',
    keywords: ['qr code generator', 'make qr code', 'free qr generator', 'create custom qr'],
    popular: true,
    featured: true,
    howToUse: ['Enter website URL or text payload.', 'Adjust size and background/foreground colors.', 'Click Download QR Code (PNG).'],
    features: ['High-resolution PNG download.', 'Custom foreground and background colors.', 'No expiration or scanning limits.'],
    faq: [{ question: 'Do generated QR codes expire?', answer: 'No! The generated QR codes are static and permanent.' }]
  },
  {
    slug: 'color-converter',
    name: 'Color Converter (HEX / RGB / HSL)',
    category: 'Image Tools',
    shortDescription: 'Convert color codes between HEX, RGB, HSL, and view visual color preview palettes.',
    iconName: 'Palette',
    keywords: ['color converter', 'hex to rgb', 'rgb to hex', 'color code finder'],
    howToUse: ['Pick a color with the visual color picker or type a HEX value (e.g. #3b82f6).', 'View instant RGB and HSL code conversions.'],
    features: ['Visual color preview box.', 'Copy HEX, RGB, or HSL with 1-click.'],
    faq: [{ question: 'What is HEX color format?', answer: 'HEX is a 6-character hexadecimal string representing red, green, and blue intensities.' }]
  },
  {
    slug: 'image-compressor',
    name: 'Image Compressor',
    category: 'Image Tools',
    shortDescription: 'Compress JPEG, PNG, and WebP images client-side without uploading to external servers.',
    iconName: 'FileArchive',
    keywords: ['image compressor', 'compress image online', 'reduce image size', 'png compressor'],
    popular: true,
    featured: true,
    howToUse: ['Select or drag & drop an image file (JPEG, PNG, WebP).', 'Adjust quality slider (e.g., 80%).', 'Download compressed image.'],
    features: ['100% private browser-side Canvas compression.', 'Shows before/after file size comparison.', 'Preserves image proportions.'],
    faq: [{ question: 'Are my uploaded images stored on your server?', answer: 'No! Image compression happens entirely inside your browser using HTML5 Canvas.' }]
  },
  {
    slug: 'image-resizer',
    name: 'Image Resizer',
    category: 'Image Tools',
    shortDescription: 'Resize image dimensions in pixels (Width x Height) while keeping aspect ratio unlocked or locked.',
    iconName: 'Maximize2',
    keywords: ['image resizer', 'resize image pixels', 'change photo size', 'picture dimensions'],
    howToUse: ['Upload an image file.', 'Specify new Target Width and Height in pixels.', 'Click Resize & Download.'],
    features: ['Maintain aspect ratio toggle.', 'High quality image scaling output.'],
    faq: [{ question: 'What image formats are supported?', answer: 'PNG, JPEG, WebP, and GIF.' }]
  },
  {
    slug: 'image-converter',
    name: 'Image Format Converter',
    category: 'Image Tools',
    shortDescription: 'Convert image formats between PNG, JPG/JPEG, and WebP locally in your browser.',
    iconName: 'Repeat',
    keywords: ['image format converter', 'png to jpg', 'jpg to webp', 'png to webp'],
    howToUse: ['Upload your source image.', 'Select target export format (JPEG, PNG, or WebP).', 'Click Convert and Save.'],
    features: ['Instant local conversion.', 'Preserves transparent backgrounds when converting to PNG/WebP.'],
    faq: [{ question: 'Why convert images to WebP?', answer: 'WebP offers significantly smaller file sizes with high visual quality for websites.' }]
  },

  // --- GENERATORS ---
  {
    slug: 'random-number',
    name: 'Random Number Generator',
    category: 'Generators',
    shortDescription: 'Generate random numbers within custom minimum and maximum range limits.',
    iconName: 'Sparkles',
    keywords: ['random number generator', 'number picker', 'random integer', 'dice roller'],
    howToUse: ['Set Minimum value (e.g. 1) and Maximum value (e.g. 100).', 'Specify total quantity to generate.', 'Click Generate.'],
    features: ['Allow or disallow duplicate numbers option.', 'Sort results ascending/descending.'],
    faq: [{ question: 'Is this cryptographically secure?', answer: 'It uses standard browser Math.random algorithm ideal for everyday sampling and raffles.' }]
  },
  {
    slug: 'password-generator',
    name: 'Password Generator',
    category: 'Generators',
    shortDescription: 'Generate strong, random passwords with customizable length, symbols, numbers, and strength indicators.',
    iconName: 'ShieldCheck',
    keywords: ['password generator', 'strong password maker', 'secure password generator'],
    popular: true,
    featured: true,
    howToUse: ['Select desired password length (8-64 characters).', 'Toggle Uppercase, Lowercase, Numbers, and Symbols.', 'Click Generate Password.'],
    features: ['Strength evaluation bar (Weak, Good, Strong, Super Secure).', '1-click Copy to clipboard.', 'Custom symbol inclusion.'],
    faq: [{ question: 'Are generated passwords saved anywhere?', answer: 'Never. Passwords are generated on-the-fly in your browser and are never transmitted anywhere.' }]
  },

  // --- TIME TOOLS ---
  {
    slug: 'stopwatch',
    name: 'Stopwatch',
    category: 'Time Tools',
    shortDescription: 'Online millisecond precision stopwatch with lap timing recording and reset functionality.',
    iconName: 'Timer',
    keywords: ['online stopwatch', 'lap timer', 'millisecond stopwatch', 'precision timer'],
    howToUse: ['Click Start to start timing.', 'Click Lap to record split times.', 'Click Pause/Stop or Reset when finished.'],
    features: ['Millisecond accuracy (00:00:00.00).', 'Full Lap recording table.', 'Works in background browser tab.'],
    faq: [{ question: 'Does the stopwatch pause if I switch tabs?', answer: 'No, timing relies on performance timestamps so it remains accurate across tabs.' }]
  },
  {
    slug: 'countdown',
    name: 'Countdown Timer',
    category: 'Time Tools',
    shortDescription: 'Set custom countdown timers for minutes, hours, or seconds with audio alarm alerts.',
    iconName: 'Clock',
    keywords: ['countdown timer', 'online timer', 'alarm timer', 'minutes countdown'],
    howToUse: ['Set Hours, Minutes, and Seconds.', 'Click Start Timer.', 'Audio beep sound will notify you when countdown reaches zero.'],
    features: ['Visual progress ring meter.', 'Audible notification chime alert.', 'Title bar updates remaining time.'],
    faq: [{ question: 'Can I pause the countdown?', answer: 'Yes, click Pause at any time to freeze the countdown.' }]
  },
  {
    slug: 'compound-interest-calculator',
    name: 'Compound Interest Calculator',
    category: 'Calculators',
    shortDescription: 'Calculate compound interest growth on investments with annual, quarterly, or monthly compounding frequency.',
    iconName: 'TrendingUp',
    keywords: ['compound interest calculator', 'investment calculator', 'compound growth calculator', 'interest compounding'],
    popular: true,
    howToUse: [
      'Enter principal investment amount.',
      'Specify annual interest rate and term in years.',
      'Choose compounding frequency to calculate total return.'
    ],
    features: [
      'Calculates total future balance and net interest earned.',
      'Flexible compounding frequencies (annual, quarterly, monthly, daily).',
      'Real-time browser computation.'
    ],
    faq: [
      { question: 'What is compound interest?', answer: 'Compound interest is interest earned on initial principal plus accumulated interest from previous periods.' }
    ]
  },
  {
    slug: 'loan-calculator',
    name: 'Loan & EMI Calculator',
    category: 'Calculators',
    shortDescription: 'Calculate monthly loan EMI payments, total interest payable, and repayment totals for home or personal loans.',
    iconName: 'DollarSign',
    keywords: ['loan calculator', 'emi calculator', 'mortgage payment calculator', 'loan repayment'],
    popular: true,
    featured: true,
    howToUse: [
      'Input principal loan amount ($).',
      'Enter interest rate (%) and tenure in years.',
      'View instant monthly EMI breakdown and total interest costs.'
    ],
    features: [
      'Accurate monthly EMI calculation formula.',
      'Total interest and loan repayment breakdown.',
      'Supports home, auto, and personal loan calculations.'
    ],
    faq: [
      { question: 'Does EMI change over time?', answer: 'Standard fixed-rate EMIs remain constant throughout the loan term.' }
    ]
  },
  {
    slug: 'css-minifier',
    name: 'CSS Minifier & Formatter',
    category: 'Developer Tools',
    shortDescription: 'Compress CSS stylesheets by removing whitespace, comments, and line breaks to optimize page speed.',
    iconName: 'Code',
    keywords: ['css minifier', 'minify css', 'css compressor', 'clean css'],
    howToUse: [
      'Paste raw CSS code into input area.',
      'Click Minify CSS.',
      'Copy the optimized single-line CSS string.'
    ],
    features: [
      'Removes comments, blank lines, and unnecessary spaces.',
      'Reduces CSS file transfer sizes for faster web page loads.',
      '100% client-side privacy.'
    ],
    faq: [
      { question: 'Does CSS minification affect code styling execution?', answer: 'No, minification only strips unneeded formatting characters while retaining exact styling logic.' }
    ]
  },
  {
    slug: 'csv-to-json',
    name: 'CSV to JSON Converter',
    category: 'Developer Tools',
    shortDescription: 'Convert CSV spreadsheet text and tables directly into structured JSON arrays.',
    iconName: 'FileCode',
    keywords: ['csv to json', 'convert csv to json', 'csv json parser', 'table to json'],
    howToUse: [
      'Paste comma-separated CSV text with header row.',
      'Click Convert to JSON.',
      'Copy formatted JSON array output.'
    ],
    features: [
      'Header-aware CSV column parsing.',
      'Formatted indented JSON output.',
      'Instant client-side execution.'
    ],
    faq: [
      { question: 'Do my CSV records get uploaded to a server?', answer: 'No, all parsing runs locally inside your browser.' }
    ]
  },
  {
    slug: 'text-to-speech',
    name: 'Text to Speech Reader',
    category: 'Text Tools',
    shortDescription: 'Read text out loud using browser Web Speech synthesis audio engine.',
    iconName: 'Volume2',
    keywords: ['text to speech', 'tts reader', 'read text out loud', 'speech synthesizer'],
    howToUse: [
      'Type or paste text into the box.',
      'Click Play Audio to listen to natural voice speech.',
      'Click Stop to pause speech synthesis.'
    ],
    features: [
      'Native Web Speech API engine.',
      'Zero audio file downloads needed.',
      'Works offline in browser.'
    ],
    faq: [
      { question: 'Is voice reader free?', answer: 'Yes, text-to-speech uses your browser built-in speech engine.' }
    ]
  },
  {
    slug: 'slug-generator',
    name: 'SEO URL Slug Generator',
    category: 'Text Tools',
    shortDescription: 'Convert titles and article headlines into clean, lowercase, hyphenated URL slugs for web pages.',
    iconName: 'Link',
    keywords: ['slug generator', 'url slug generator', 'seo slug maker', 'permalink generator'],
    howToUse: [
      'Enter headline or phrase.',
      'Click Generate URL Slug.',
      'Copy clean hyphenated slug.'
    ],
    features: [
      'Strips special characters and punctuation.',
      'Converts spaces to hyphens and text to lowercase.',
      'SEO compliant permalinks.'
    ],
    faq: [
      { question: 'Why use hyphens in URLs?', answer: 'Search engines treat hyphens as word separators in web page URLs.' }
    ]
  }
];

export function getToolBySlug(slug: string): ToolMeta | undefined {
  return TOOLS_REGISTRY.find((t) => t.slug === slug);
}

export function getToolsByCategory(category: string): ToolMeta[] {
  return TOOLS_REGISTRY.filter((t) => t.category === category);
}

export function getPopularTools(): ToolMeta[] {
  return TOOLS_REGISTRY.filter((t) => t.popular);
}

export function getFeaturedTools(): ToolMeta[] {
  return TOOLS_REGISTRY.filter((t) => t.featured);
}
