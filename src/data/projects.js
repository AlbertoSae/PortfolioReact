import { Icons } from '../assets/iconRegistry';

// [IMPORT_MARKER]

// Project MiniPasswordManager
import MiniPasswordManager_1 from '../assets/MiniPasswordManager/1.mp4';

// Project 1: Bigotes Assets
import bigotes1 from '../assets/Project1/1.png';
import bigotes2 from '../assets/Project1/2.png';
import bigotes3 from '../assets/Project1/3.png';
import bigotes4 from '../assets/Project1/4.png';
import bigotes5 from '../assets/Project1/5.png';
import bigotes6 from '../assets/Project1/6.png';
import bigotes7 from '../assets/Project1/7.png';
import bigotes8 from '../assets/Project1/8.png';

export const projects = [
  // [PROJECT_MARKER]
  {
    id: 'MiniPasswordManager',
    images: [MiniPasswordManager_1],
    tech: [
      { icon: Icons.Framework.javaSw, type: 'original' },
      { icon: Icons.Languages.java, type: 'original' }
    ],
    github: "https://github.com/AlbertoSae/MiniPasswordManager",
    hasDemo: false
  },
  {
    id: 'project1',
    images: [bigotes1, bigotes2, bigotes3, bigotes4, bigotes5, bigotes6, bigotes7, bigotes8],
    tech: [
      { icon: Icons.Languages.py, type: 'original' }
    ],
    github: "https://github.com/AlbertoSae/Bigotes",
    hasDemo: false
  },
];
