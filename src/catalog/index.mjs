import { episode01 } from './episode-01-vscode-vs-cursor.mjs';
import { episode02 } from './episode-02-jetbrains-ecosystem.mjs';
import { episode03 } from './episode-03-neovim-modern-cli.mjs';
import { episode04 } from './episode-04-antigravity-agentic-ides.mjs';
import { episode05 } from './episode-05-zed-rust-editor.mjs';

export const ALL_EPISODES = [
  episode01,
  episode02,
  episode03,
  episode04,
  episode05,
];

export function getEpisodeById(id) {
  return ALL_EPISODES.find((ep) => ep.id === id);
}

export default ALL_EPISODES;
