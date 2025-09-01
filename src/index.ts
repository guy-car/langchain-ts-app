import 'dotenv/config';
import { ChatOpenAI } from '@langchain/openai';
import { HumanMessage, SystemMessage } from '@langchain/core/messages';
import { ChatPromptTemplate } from '@langchain/core/prompts';

const model = new ChatOpenAI({ model: 'gpt-5-chat-latest' });

const messages = [
  new SystemMessage('Translate the following from English into French'),
  new HumanMessage("hi! I'm fat and ugly, can you help me?"),
];

// const response = await model.invoke(messages);
// console.log(response);

// const stream = await model.stream(messages);

// const chunks = [];
// for await (const chunk of stream) {
//   chunks.push(chunk);
//   console.log(`${chunk.content}|`);
// }

const systemTemplate = 'translate the following into {language}';

const promptTemplate = ChatPromptTemplate.fromMessages([
  ['system', systemTemplate],
  ['user', '{text}'],
]);

const promptValue = await promptTemplate.invoke({
  language: 'French',
  text: 'What are we eating for lunch?',
});

// console.log(promptValue);

const response = await model.invoke(promptValue);
console.log(`🤖AI Reponse: ${response.content}`);
