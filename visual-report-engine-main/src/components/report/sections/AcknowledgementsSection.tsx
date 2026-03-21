import React from 'react';

const AcknowledgementsSection: React.FC = () => {
  return (
    <>
      <p className="report-paragraph">
        The successful completion of this project would not have been possible without the guidance, support, and encouragement of numerous individuals and organizations. I would like to express my sincere gratitude to all those who contributed directly or indirectly to the development of this AI-Powered Chess Game.
      </p>

      <p className="report-paragraph">
        First and foremost, I would like to extend my heartfelt thanks to my project guide and mentor for their invaluable guidance throughout the development process. Their expertise in software engineering and artificial intelligence provided the foundation upon which this project was built. Their constructive feedback during each phase of development helped shape the project into its final form.
      </p>

      <p className="report-paragraph">
        I am deeply grateful to the Head of the Department of Computer Science and Engineering for providing the necessary infrastructure and resources required for this project. The access to computing facilities and development tools was instrumental in the successful implementation of the chess engine and its associated components.
      </p>

      <p className="report-paragraph">
        I would also like to acknowledge the open-source community for their incredible contributions that made this project possible. Special thanks to:
      </p>

      <ul className="report-list">
        <li><strong>The chess.js contributors</strong> — for developing and maintaining a comprehensive chess move generation and validation library that forms the backbone of our game logic</li>
        <li><strong>The Stockfish development team</strong> — for creating one of the strongest open-source chess engines in the world and making it available under the GNU General Public License</li>
        <li><strong>The React.js team at Meta</strong> — for building and maintaining a powerful, component-based UI framework that enabled rapid frontend development</li>
        <li><strong>The TypeScript team at Microsoft</strong> — for creating a type-safe superset of JavaScript that significantly improved code quality and developer experience</li>
        <li><strong>The Vite.js team</strong> — for developing a blazing-fast build tool that streamlined the development workflow</li>
        <li><strong>The Tailwind CSS team</strong> — for creating a utility-first CSS framework that enabled consistent and responsive styling</li>
        <li><strong>The shadcn/ui community</strong> — for providing accessible, customizable UI components built on Radix primitives</li>
      </ul>

      <p className="report-paragraph">
        I extend my sincere appreciation to my peers and fellow students who participated in user testing sessions. Their feedback on the user interface, game difficulty levels, and overall user experience was invaluable in refining the application. The collaborative discussions about chess engine algorithms and optimization techniques contributed significantly to the project's technical depth.
      </p>

      <p className="report-paragraph">
        I am thankful to the various online learning platforms, documentation resources, and technical communities — including Stack Overflow, MDN Web Docs, and the React documentation — which served as essential references throughout the development lifecycle.
      </p>

      <p className="report-paragraph">
        Finally, I would like to express my deepest gratitude to my family and friends for their unwavering support and encouragement during the course of this project. Their patience and understanding during long coding sessions and late nights were truly appreciated.
      </p>

      <div className="report-note">
        <p className="text-sm italic">
          "The beauty of chess is it can be whatever you want it to be. It transcends language, and it transcends race, and it transcends politics. It is as beautiful as any art, and as rigorous as any science."
        </p>
        <p className="text-sm mt-2 text-right">— Simon Williams, International Chess Grandmaster</p>
      </div>
    </>
  );
};

export default AcknowledgementsSection;
