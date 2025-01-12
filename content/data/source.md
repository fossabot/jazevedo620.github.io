---
title: Resume Source
buttons:
- text: Back
  icon: chevron-left
  href: '/resume'
  class: 'btn-primary'
- text: View on Overleaf
  icon: overleaf
  href: 'https://www.overleaf.com/read/yjnpqvnbkrdg'
  class: 'btn-secondary'
---

# `resume.tex`

~~~latex{numberLines: true}
\documentclass[a4paper,11pt]{article}

% Base packages
\usepackage{array}
\usepackage{xunicode,xltxtra,url,parskip}
\RequirePackage{color,graphicx}
% Page formatting
\usepackage[big]{layaureo}

% Set up LaTeX logo
\usepackage{metalogo}
\setlogokern{La}{-0.05em}
\setlogokern{aT}{-0.05em}
\setlogokern{Te}{-0.1em}
\setlogokern{eX}{-0.04em}
\setLaTeXa{\raisebox{5em}{\scshape a}}

% Setup link colors
\usepackage{hyperref}
\definecolor{linkcolour}{rgb}{0,0.2,0.6}
\hypersetup{colorlinks,breaklinks,urlcolor=linkcolour, linkcolor=linkcolour}

% Load font from otf files
\usepackage{fontspec}
\defaultfontfeatures{Mapping=tex-text}
\setmainfont[
  SmallCapsFont = Fontin-SmallCaps.otf,
  BoldFont = Fontin-Bold.otf,
  ItalicFont = Fontin-Italic.otf
]
{Fontin.otf}

% Configure title format
\usepackage{titlesec}
\titleformat{\section}{\Large\scshape\raggedright}{}{0em}{}[{\titlerule[0.4pt]}]
\titlespacing{\section}{0pt}{0pt}{0pt}

% Defines resume section environment
\newenvironment{rsection}[1]
  {
    \section{#1}
    \begin{tabular}{>{\raggedleft\arraybackslash}p{3.7cm}|p{14.7cm}}
   } {
    \end{tabular}
  }
% defines resume subsection header
\newcommand{\rheader}[2]{
  \textsc{#1} & \textbf{#2}
}
% defines resume subsection subheader
\newcommand{\rdesc}[1]{
  \\&\small{\emph{#1}\vspace{2pt} }
}
% defines resume subsection line
\newcommand{\rline}[1]{\\& #1}
% defines resume subsection item
\newcommand{\ritem}[2][ • ]{\\[-2pt]& \footnotesize{#1#2}}
% Defines resume skills environment
\newenvironment{rskills}[1][Skills]
  {
    \section{#1}
    \begin{tabular}{>{\raggedleft\arraybackslash}p{3.7cm}p{14.7cm}}
    } {
    \end{tabular}
  }
% defines resume skills section line
\newcommand{\rskill}[2]{\textsc{#1}:& #2 \\}
% defines resume subsection gap
\newcommand{\rskip}{\\\multicolumn{2}{c}{} \\}


% Begin document
\begin{document}

% Set up margins/origin
\hsize=7.5in \vsize=11in
\hoffset=-0.65in \voffset=-0.4in
% Output page size
\pdfpagewidth=8.5in
\pdfpageheight=11in
% Non-numbered pages
\pagestyle{empty}


% Title
\begin{center}
     \Huge       Joseph Azevedo
  \\ \normalsize • \href{mailto:joseph.az@gatech.edu}{joseph.az@gatech.edu} • (423) 284-1197 •
\href{https://github.com/jazevedo620}{github.com/jazevedo620} • \href{https://jazevedo.me}{Portfolio} • \\[6pt]
\end{center}
% Spacing
\vspace{-4pt}


% Section: Education
\begin{rsection}{Education}
  \rheader{Jun 2018 - Current}{Georgia Institute of Technology{\normalfont, Atlanta, GA \dotfill\  GPA: 4.0/4.0}}
  \rline{Bachelor of Science, Computer Science}
  \vspace{2pt}
  \ritem[]{Concentration: Information Internetworks \& Media}
  \ritem[]{Graduation date: May 2021 (Expected)}
\end{rsection}
% Spacing
\vspace{-9pt}


% Section: Skills
\begin{rskills}
  \rskill{Programming}      {Java, Scala, JavaScript, HTML/CSS/Sass, Python, PHP, C\#, C, C++, Batch}
  \rskill{Software}         {Git, Docker, Kubernetes, OpenShift, \LaTeX, JetBrains IDEs, Nginx, Apache, Wordpress, Webpack, Jekyll, Gatsby.js}
  \rskill{Frameworks}       {Bootstrap, jQuery, D3, Node.js, WPF, Android SDK, .NET, Play, Akka, Vue.js, React}
  \rskill{Concepts}         {Containerization \& Orchestration,  Client/server model, Agile development, SPAs}
  \rskill{Relevant Courses} {Object oriented programming, Data structures \& algorithms, Objects \& design,
Computational organization \& programming, Information visualization, Systems and Networks, Database systems}
\end{rskills}
% Spacing
\vspace{-8pt}


% Section: Projects
\begin{rsection}{Projects}
  % Project: 2340 Risk
  \rheader{Jan 2019 - May 2019}{Risk Web Application}
  \rdesc{Software engineering class group project {\normalfont • \href{https://riskgame.ga/}{riskgame.ga} •
\href{https://github.com/jazevedo620/cs2340-risk}{(Github)}}}
  \ritem{Helped build front-end with Vue.js/Vuex and Bootstrap, leveraging a Konva.js canvas to render the game}
  \ritem{Engineered back-end and accompanying network model in Scala Play, using Akka actors to provide a stateful
and scalable way of processing game \& lobby state}
  \ritem{Containerized application using Docker Alpine JRE image and configured Kubernetes/OpenShift deployment on
OpenShift Online as well as Azure}
  \rskip

  % Project: Gamefest Website
  \rheader{Jun 2018 - Nov 2018}{\textit{Gamefest} Website: Event Information}
  \rdesc{Static site development as a part of a team {\normalfont • \href{https://gamefest.gg}{gamefest.gg} •
\href{https://web.archive.org/web/20181029052602im_/https://gamefest.gg/}{(archived)}}}
  \ritem{Built front-end with jQuery and Bootstrap; static backend on Apache webserver}
  \ritem{Utilized Git for version control and issue tracking}
  \ritem{Interfaced with third-party tournament service Smash.gg for payment and registration}
  \rskip

  % Project: FBLA Desktop Application
  \rheader{Aug 2017 - Feb 2018}{Business-focused Desktop Database Client}
  \rdesc{Desktop database client program to manage the issuance of library books {\normalfont •
\href{https://github.com/jazevedo620/LibraryManager}{(Github)}}}
  \ritem{Built application's data model in C\# and leveraging XAML's responsive binding to build the UI}
  \ritem{Created documentation via \LaTeX\ \& used Git for version control}
  \ritem{Utilized a variety of open source APIs to facilitate development (i.e. scheduling \& UI toolkits)}
\end{rsection}
% Spacing
\vspace{-2pt}

% Section: Work Experience
\begin{rsection}{Work Experience}
  % Job: AXR Website
  \rheader{Feb 2019 - Current}{Web Designer \& Developer}
  \rdesc{Axis Replay {\normalfont •
\href{https://web.archive.org/web/20190412204444_/https://www.axisreplay.com/}{Before (archived)} •
\href{http://axr.gg}{After (staging)}}}
  \ritem{Redesigned company's main website, developing accompanying mockups and branding guidelines}
  \ritem{Developed custom PHP to handle modular and conditional injection of various styles and scripts}
  \ritem{Used an Apache/MySQL/PHP stack with Wordpress on AWS to configure staging before deploying}
\end{rsection}

% Spacing
\vspace{-8pt}

% Section: Leadership
\begin{rsection}{Leadership}
  % Position: GTE President
  \rheader{Apr 2019 - Current}{President}
  \rdesc{Georgia Tech Esports Club}
  \ritem{Led one of the largest student orgs at GT with over 300 active members, comprised of over 30 teams}
  \ritem{Developed and unified branding for the club and its events, including logos, graphics, and videos}
  \ritem{Conducted corporate outreach and maintained relationships with campus administration and outside
companies for funding and partnerships}
\end{rsection}


\end{document}
~~~
