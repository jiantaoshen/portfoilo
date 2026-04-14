import './App.css';
import Circles from './circlesDisplay';
import GitHubIcon from './images/GitHub_Invertocat_Black.png';
import LinkedInIcon from './images/LI-In-Bug.png';

function App() {
  const name = "JIANTAO SHEN";
  
  return (
    <div className="App">
        <div className="fullname">
            <h1>{name}</h1>
        </div>

        <div className="flex-container">
           {/*  Left Box */}
            <div className="left">
                <h3 className="title">Kontakt</h3>
                <a href="https://github.com/jiantaoshen" target="_blank" rel="noopener noreferrer">
                    <img src={GitHubIcon} alt="GitHub" className="icons"/>
                </a>

                <a href= "https://www.linkedin.com/in/jiantaoshen/" target="_blank" rel="noopener noreferrer">
                    <img src={LinkedInIcon} alt="LinkedIn" className="icons"/>
                </a>

                <h3 className="title">Språk</h3>
                <div className="skill">
                    <span>Kinesiska (Modersmål)</span>
                    <Circles level={5} />
                    <span>Engelska (B2 - C1)</span>
                    <Circles level={4} />
                    <span>Svenska (B2 - C1)</span>
                    <Circles level={4} />
                </div>

                <h3 className="title">Kompetens</h3>
                <div className="skill">
                    <span>Python & Machine Learning</span>
                    <Circles level={3} />
                    <span>C# & .NET</span>
                    <Circles level={2} />
                    <span>CSS + HTML + Javascript</span>
                    <Circles level={1} />
                    <span>SQL</span>
                    <Circles level={1} />
                </div>
            </div>

            {/* <!--Right Box--> */}
            <div className="right">
                <div>
                    <h3 className="title">Om mig</h3>
                    <p>Jag är civilingenjör inom robotik med erfarenhet av maskininlärning, AI och programmering. 
                        Jag har ett starkt intresse för att utveckla intelligenta system och effektiv backend-mjukvara, 
                        och har nu övergått till att fokusera på backend-utveckling och systemarkitektur.</p>
                </div>
                <div>
                    <h3 className="title">Projekt</h3>
                    <h4>Maskininlärning för handgestigenkänning (Examensarbete, 2024)</h4>
                    <ul>
                        <li>Utvecklade ett system för handgestigenkänning baserat på FMCW-radar och Convolutional Neural Networks (CNN) i ett tvåpersonersteam</li>
                        <li>Bearbetade radarsignaler för att extrahera rörelsedata och objektinformation i Python</li>
                        <li>Implementerade och tränade en CNN-modell i TensorFlow för klassificering av handgester</li>
                    </ul>
                </div>

                <div>
                    <h3 className="title">Utbildning</h3>
                    <h4>Programmerare AI (yrkesutbildning), Distans, Lexicon AB (Malmö) (2026 MAR - Nu)</h4>
                    <ul>
                        <li>Inriktning på utveckling av webbapplikationer och molntjänster. </li>
                    </ul>
                    <h4>Arbetsmarknadsaktiviteter + Språkkurser (2024 JUL - 2026 MAR)</h4>
                    <ul>
                        <li>Fördjupar svenska och engelska för att stärka kommunikationsförmåga. </li>
                    </ul>
                    <h4>Civilingenjör inom robotik, Västerås, Mälardalen universitet (2019 SEP - 2024 JUL)</h4>
                    <ul>
                        <li>Inriktning på robotik, inbyggda system, maskininlärning och artificiell intelligens. </li>  
                    </ul>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
