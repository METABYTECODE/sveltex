import { execSync } from 'child_process';
import { existsSync } from 'fs';

const run = (cmd) => execSync(cmd, { stdio: 'inherit' });

const userName = "METABYTECODE";
const userEmail = "tblazesteam@gmail.com";
const repoName = "sveltex"; // имя репозитория

// 👉 Сначала инициализируем Git
if (!existsSync('.git')) {
  run('git init');
}

// 👉 Теперь можно конфигурировать локальный Git
run(`git config user.name "${userName}"`);
run(`git config user.email "${userEmail}"`);

run('git add -A');
run('git commit -m "Initial commit"');

// 👉 Создаём репу и пушим
run(`gh repo create ${repoName} --source=. --public --push`);
