import React from 'react';
import {
  BasicCalculatorTool,
  ScientificCalculatorTool,
  PercentageCalculatorTool,
  DiscountCalculatorTool,
  AgeCalculatorTool,
  DateDifferenceTool,
  BmiCalculatorTool,
  TimeCalculatorTool,
} from './Calculators';

import {
  LengthConverterTool,
  WeightConverterTool,
  TemperatureConverterTool,
  DataConverterTool,
} from './Converters';

import {
  WordCounterTool,
  CharacterCounterTool,
  CaseConverterTool,
  RemoveDuplicateLinesTool,
  TextFormatterTool,
} from './TextTools';

import {
  JsonFormatterTool,
  JsonValidatorTool,
  Base64Tool,
  UrlTool,
} from './DeveloperTools';

import {
  QrGeneratorTool,
  ColorConverterTool,
  ImageCompressorTool,
  ImageResizerTool,
  ImageFormatConverterTool,
} from './ImageTools';

import {
  RandomNumberTool,
  PasswordGeneratorTool,
} from './Generators';

import {
  StopwatchTool,
  CountdownTimerTool,
} from './TimeTools';

export const TOOL_COMPONENTS_MAP: Record<string, React.FC> = {
  // Calculators
  'calculator': BasicCalculatorTool,
  'scientific-calculator': ScientificCalculatorTool,
  'percentage-calculator': PercentageCalculatorTool,
  'discount-calculator': DiscountCalculatorTool,
  'age-calculator': AgeCalculatorTool,
  'date-difference': DateDifferenceTool,
  'bmi-calculator': BmiCalculatorTool,
  'time-calculator': TimeCalculatorTool,

  // Converters
  'unit-converter': LengthConverterTool,
  'length-converter': LengthConverterTool,
  'weight-converter': WeightConverterTool,
  'temperature-converter': TemperatureConverterTool,
  'data-converter': DataConverterTool,
  'data-storage-converter': DataConverterTool,

  // Text Tools
  'word-counter': WordCounterTool,
  'character-counter': CharacterCounterTool,
  'case-converter': CaseConverterTool,
  'remove-duplicate-lines': RemoveDuplicateLinesTool,
  'text-formatter': TextFormatterTool,

  // Developer Tools
  'json-formatter': JsonFormatterTool,
  'json-validator': JsonValidatorTool,
  'base64': Base64Tool,
  'url-encoder': UrlTool,
  'url-decoder': UrlTool,

  // Image Tools
  'qr-generator': QrGeneratorTool,
  'qr-code-generator': QrGeneratorTool,
  'color-converter': ColorConverterTool,
  'image-compressor': ImageCompressorTool,
  'image-resizer': ImageResizerTool,
  'image-converter': ImageFormatConverterTool,
  'image-format-converter': ImageFormatConverterTool,

  // Generators
  'random-number': RandomNumberTool,
  'random-number-generator': RandomNumberTool,
  'password-generator': PasswordGeneratorTool,

  // Time Tools
  'stopwatch': StopwatchTool,
  'countdown': CountdownTimerTool,
  'countdown-timer': CountdownTimerTool,
};

export function getToolComponent(slug: string): React.FC | null {
  return TOOL_COMPONENTS_MAP[slug] || null;
}
