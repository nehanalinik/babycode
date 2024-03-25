import ShareImg from "../../assets/images/Share.png";
import Speaking from "../../assets/images/speaking.png";
import Listening from "../../assets/images/listening.png";
import Reading from "../../assets/images/reading.png";
import Writing from "../../assets/images/writing.png";
import Vocabulary from "../../assets/images/vocabulary.png";
import Classes from "../../assets/images/classes.png";
import Book from "../../assets/images/bookieltsexam.png";
import StudentNews from "../../assets/images/studentnews.png";
import YoutubeIcon from "../../assets/images/youtube.png";
import WhatsappIcon from '../../assets/images/whatsapp.png';
import ArrowRightIcon from '../../assets/images/ArrowCircleRight.png';
import ArrowRightIconWhite from '../../assets/images/ArrowCircleRight (1).png';
import CheckListIcon from '../../assets/images/checklist.png';

import moment from "moment";
import { Chart as ChartJS, CategoryScale, defaults } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import dataSource from "./dataSource.json";

ChartJS.register(CategoryScale);

defaults.maintainAspectRatio = false;
defaults.responsive = true;

//title
defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.color = "grey";

const HomePagePresentation = () => {
  console.log(dataSource);

  const getFormattedDate = (date: any) => {
    return moment(date).format("DD MMM");
  };
  const today = moment();
  const labels = [];
  for (let i = 6; i >= 0; i--) {
    const date = moment(today).subtract(i, "days");
    labels.push(getFormattedDate(date));
  }

  return (
    <main className="main">
      <div className="home-container">
        <h1>Your Progress Summary</h1>
        <div className="main-homecontainer">
          <div className="students-helped">
            <p>How many students we helped?</p>
            <button className="studentshelpBtn">Check</button>
          </div>
          <div className="progress">
            <div className="progress-status">
              <span>Wow!</span> you're about to reach your targeted band
            </div>
            <Line
              className="line-chart"
              data={{
                labels: labels,
                datasets: [
                  {
                    data: dataSource.map((item) => item.score),
                    backgroundColor: "#064FF0",
                    borderColor: "#064FF0",
                  },
                ],
              }}
              options={{
                elements: {
                  line: {
                    tension: 0.4,
                  },
                },
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                backgroundColor: "#FFFFFF",
              }}
            />
          </div>
          <div className="share">
            <img src={ShareImg} alt="share picture" />
            <div className="share-content">
              <h3>One Share can save many lives</h3>
              <p>
                Your one share can unlock a world of education for unprivileged.
              </p>
              <button className="sharebtn">Share App</button>
            </div>
          </div>
          <div className="prep">
            <div className="prep-title">Prepare with ease</div>
            <div className="prep-details">
              <div className="prep-details-content">
                <img src={Speaking} alt="Speaking" />
                <div className="prep-details-content-title">Speaking</div>
              </div>
              <div className="prep-details-content">
                <img src={Listening} alt="Listening" />
                <div className="prep-details-content-title">Listening</div>
              </div>
              <div className="prep-details-content">
                <img src={Reading} alt="Reading" />
                <div className="prep-details-content-title">Reading</div>
              </div>
              <div className="prep-details-content">
                <img src={Writing} alt="Writing" />
                <div className="prep-details-content-title">Writing</div>
              </div>
              <div className="prep-details-content">
                <img src={Vocabulary} alt="Vocabulary" />
                <div className="prep-details-content-title">Vocabulary</div>
              </div>
              <div className="prep-details-content">
                <img src={Classes} alt="Classes" />
                <div className="prep-details-content-title">Classes</div>
              </div>
              <div className="prep-details-content">
                <img src={Book} alt="Book IELTS Classes" />
                <div className="prep-details-content-title">
                  Book IELTS Classes
                </div>
              </div>
              <div className="prep-details-content">
                <img src={StudentNews} alt="Student News" />
                <div className="prep-details-content-title">Student News</div>
              </div>
            </div>
          </div>
          <div className="social">
            <div className="share-youtube-whatsapp">
              <div className="share-youtube-whatsapp-title">Quick Actions</div>
              <div className="share-youtube-whatsapp-contents">
                <div className="youtube">
                  <img src={YoutubeIcon} alt="youtube icon" />
                  <div>App Guide Video</div>
                </div>
                <div className="whatsapp">
                  <img src={WhatsappIcon} alt="whatsapp icon" />
                  <div>Help & Support</div>
                </div>
              </div>
            </div>
            <div className="calltoaction-container">
              <h2>Explore premium features with ease!</h2>
              <ul>
                <li><img src={ArrowRightIcon}/>Unlimited Speaking Test Access</li>
                <li><img src={ArrowRightIcon}/>Unlimited Writing Test Access</li>
                <li><img src={ArrowRightIcon}/>Analvze Your Answer</li>
                <li><img src={ArrowRightIcon}/>Check Band Score</li>
              </ul>
              <div className="cta">
                <p>Only @ &#8377; 299</p>
                <button>Buy Now <img src={ArrowRightIconWhite}/></button>
              </div>
            </div>
            <div className="mocktest-container">
              <div className="mocktest-icon">
                <img src={CheckListIcon} alt="checklist icon" />
              </div>
              <div className="mocktest-contents">
                <h3 className="mocktest-contents-title">Practice Mock Tests</h3>
                <p className="mocktest-contents-desc">
                  Get the authentic IELTS exam exoerience with all four modules
                  covered!
                </p>
                <button className="mocktestBtn">Start</button>
              </div>
              <div className="mocktest-goto-icon">
                <img src={ArrowRightIcon} alt="right icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePagePresentation;
