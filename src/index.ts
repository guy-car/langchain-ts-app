import 'dotenv/config';
import { ChatOpenAI } from '@langchain/openai';
import { HumanMessage, SystemMessage } from '@langchain/core/messages';

const model = new ChatOpenAI({ model: 'gpt-5-chat-latest' });

const messages = [
  new SystemMessage('Translate the following from English into French'),
  new HumanMessage("hi! I'm fat and ugly, can you help me?"),
];

const response = await model.invoke(messages);
console.log(response);
