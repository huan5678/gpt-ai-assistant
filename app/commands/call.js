import { SETTING_AI_NAME } from '../../constants/setting.js';
import storage from '../../storage/index.js';
import Context from '../context.js';
import { execChatCommand } from './chat.js';

/**
 * @param {Context} context
 * @returns {Promise<boolean>}
 */
const isCallCommand = async (context) => {
  const name = await storage.getItem(SETTING_AI_NAME, { useConfig: true });
  if (!name) return false;
  return context.event.text.toLowerCase().startsWith(name.toLowerCase());
};

/**
 * @param {Context} context
 * @returns {Promise<Context>}
 */
const execCallCommand = (context) => execChatCommand(context);

export {
  isCallCommand,
  execCallCommand,
};
