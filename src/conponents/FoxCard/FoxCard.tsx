import { FC, useState, useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { ICardFox } from "../../FoxCardData";
import {
  BsRocketFill,
  BsFillStarFill,
  BsFillLightningFill,
} from "react-icons/bs";
import { ProgressItem } from "./ProgressItem";
import { FoxParam } from "./FoxParam";
import { FoxDataItem } from "./FoxDataItem";
import "./FoxCard.css";

export const FoxCard: FC<{
  cardFox: ICardFox;
  index: number;
  isActive: boolean;
  isFoxCardsActive: boolean;
}> = ({ cardFox, index, isActive, isFoxCardsActive }) => {
  const [isOpenCard, setIsOpenCard] = useState<boolean>(false);
  const [isHoverCard, setIsHoverCard] = useState<boolean>(false);

  const backCardControl = useAnimationControls();
  const pinkBackControl = useAnimationControls();
  const foxImageControl = useAnimationControls();
  const cardTitleControl = useAnimationControls();
  const dataBackControl = useAnimationControls();
  const buttonControl = useAnimationControls();
  const cardShadowControl = useAnimationControls();
  const medalImageControl = useAnimationControls();

  useEffect(() => {
    if (isFoxCardsActive) {
      backCardControl.start({
        opacity: 1,
        scaleY: 1,
        transition: {
          delay: 0.3,
          duration: 0.5,
        },
      });

      foxImageControl.start({
        opacity: 1,
        x: 0,
        transition: {
          delay: 2,
          duration: 0.5,
        },
      });

      cardTitleControl.start({
        opacity: 1,
        x: 0,
        transition: {
          delay: 1.9,
          duration: 0.3,
        },
      });
    } else {
      cardTitleControl.start({
        x: -70,
        opacity: 0,
        transition: {
          duration: 0.5,
        },
      });
      foxImageControl.start({
        x: -70,
        opacity: 0,
        transition: {
          delay: 0.1,
          duration: 0.5,
        },
      });
      pinkBackControl.start({
        scaleY: 0,
        opacity: 0,
        transition: {
          delay: 0.2,
          duration: 0.5,
        },
      });

      backCardControl.start({
        scaleY: 0,
        opacity: 0,
        transition: {
          delay: 0.3,
          duration: 0.5,
        },
      });
    }
    dataBackControl.start({
      display: "none",
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    });
  }, [isFoxCardsActive]);

  useEffect(() => {
    if (isHoverCard) {
      if (isOpenCard) {
        pinkBackControl.start({
          height: "30%",
          transition: {
            duration: 0.3,
            ease: "easeInOut",
          },
        });
        foxImageControl.start({
          width: "180px",
          left: "5%",
          transition: {
            duration: 0.3,
            ease: "easeInOut",
          },
        });
        medalImageControl.start({
          opacity: 1,
          maxHeight: "60%",
          transition: {
            duration: 0.3,
            ease: "easeInOut",
          },
        });
        cardTitleControl.start({
          left: "3%",
          bottom: "55%",
          transition: {
            duration: 0.3,
            ease: "easeInOut",
          },
        });
        buttonControl.start({
          bottom: "2%",
          rotate: 180,
          transition: {
            duration: 0.3,
            ease: "easeInOut",
          },
        });
        buttonControl.start({
          scale: 1,
          transition: {
            delay: 0.3,
            duration: 0.5,
            ease: "easeInOut",
          },
        });

        dataBackControl.start({
          display: "flex",
          opacity: 1,
          transition: {
            duration: 0.5,
            ease: "easeInOut",
          },
        });
      } else {
        backCardControl.start({
          x: -30,
          transition: {
            delay: 0.1,
            duration: 0.5,
            ease: "easeInOut",
          },
        });

        dataBackControl.start({
          opacity: 0,
          // display: "none",
          transition: {
            duration: 0.3,
            ease: "easeInOut",
          },
        });

        pinkBackControl.start({
          // width: "96%",
          height: "82%",
          // borderRadius: "2rem 2rem 0 0",
          transition: {
            delay: 0.1,
            duration: 0.5,
            ease: "easeInOut",
          },
        });

        foxImageControl.start({
          width: "397.047px",
          left: "5%",
          transition: {
            delay: 0.1,
            duration: 0.5,
            ease: "easeInOut",
          },
        });

        medalImageControl.start({
          maxHeight: "35%",
          transition: {
            // delay: 0.1,
            duration: 0.3,
            ease: "easeInOut",
          },
        });

        medalImageControl.start({
          opacity: 1,
          transition: {
            delay: 0.4,
            duration: 0.5,
            ease: "easeInOut",
          },
        });

        cardTitleControl.start({
          bottom: "5%",
          left: "3%",
          transition: {
            delay: 0.1,
            duration: 0.5,
            ease: "easeInOut",
          },
        });

        buttonControl.start({
          opacity: 1,
          bottom: "5%",
          rotate: 0,
          transition: {
            duration: 0.5,
            ease: "easeInOut",
          },
        });

        buttonControl.start({
          scale: [1, 1.1],
          transition: {
            dealy: 2,
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
          },
        });
      }
    } else {
      backCardControl.start({
        x: 0,
        transition: {
          delay: 0.1,
          duration: 0.5,
          ease: "easeInOut",
        },
      });

      pinkBackControl.start({
        height: "100%",
        top: "0%",
        left: "0%",
        transition: {
          delay: 0.2,
          duration: 0.5,
          ease: "easeInOut",
        },
      });

      foxImageControl.start({
        width: "397.047px",
        left: "10%",
        transition: {
          delay: 0.2,
          duration: 0.5,
          ease: "easeInOut",
        },
      });

      medalImageControl.start({
        opacity: 0,
        transition: {
          delay: 0.1,
          duration: 0.3,
          ease: "easeInOut",
        },
      });

      cardTitleControl.start({
        left: "18%",
        bottom: "5%",
        transition: {
          delay: 0.2,
          duration: 0.5,
          ease: "easeInOut",
        },
      });

      buttonControl.start({
        opacity: 0,
        scale: 1,
        rotate: 180,
        transition: {
          delay: 0.2,
          duration: 0.5,
          ease: "easeInOut",
        },
      });

      dataBackControl.start({
        opacity: 0,
        // display: "none",
        transition: {
          duration: 0.2,
          ease: "easeInOut",
        },
      });
    }
  }, [isOpenCard, isHoverCard]);

  return (
    <motion.div
      className="foxCardBack"
      initial={{ scaleY: 0, x: 0 }}
      onHoverStart={() => {
        isActive ? setIsHoverCard(true) : setIsHoverCard(false);
      }}
      onHoverEnd={() => {
        setIsHoverCard(false);
        setIsOpenCard(false);
      }}
      animate={backCardControl}
    >
      <motion.div
        className="foxCardInner"
        initial={{ height: "100%" }}
        animate={pinkBackControl}
        style={{
          background:
            'url("images/card_back_1.jpg"), linear-gradient(90deg, #B8208D 2.92%, #52177C 102.9%)',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          transition: "background 1s ease-in-out",
        }}
      >
        <motion.img
          initial={{ left: 0 }}
          animate={foxImageControl}
          className="foxCardImage"
          src={cardFox.img}
        />

        {/* <motion.img
          animate={medalImageControl}
          src="homepage/lab/medal_1.png"
          style={{
            position: "absolute",
            maxHeight: "35%",
            top: "20%",
            right: "10%",
          }}
        /> */}
        <motion.div
          animate-={cardShadowControl}
          className="cardShadow"
        ></motion.div>
      </motion.div>

      <motion.div
        className="foxCardTitle"
        data-ishovercard={isHoverCard}
        initial={{ left: "18%", bottom: "5%" }}
        animate={cardTitleControl}
      >
        <motion.h3>
          {cardFox.name} #{index + 1}
        </motion.h3>
        <motion.p layout transition={{ duration: 0.3 }}>
          {cardFox.profession}, {cardFox.specialization}
        </motion.p>
      </motion.div>

      <motion.svg
        animate={buttonControl}
        className="descrButton"
        width="53"
        height="42"
        viewBox="0 0 53 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => {
          setIsOpenCard(!isOpenCard);
        }}
      >
        <g>
          <path
            d="M0 15.7498L26.5 30.6255L53 15.7498V27.1243L26.5 42L0 27.1243V15.7498Z"
            fill="#4dc2df"
          />
          <path d="M0 0H26.5H53V13.1243L26.5 28L0 13.1243V0Z" fill="#4dc2df" />
        </g>
      </motion.svg>

      <motion.div animate={dataBackControl}>
        <div className="dataBlock">
          <div style={{ width: "50%", padding: "0 2%" }}>
            <div className="paramsBlock">
              <div className="params">
                <FoxParam
                  id={cardFox.id}
                  paramName={"Gender"}
                  paramValue={cardFox.gender}
                  isOpenCard={isOpenCard}
                />
                <FoxParam
                  id={cardFox.id}
                  paramName={"Color"}
                  paramValue={cardFox.color}
                  isOpenCard={isOpenCard}
                />
              </div>

              <div className="params">
                <FoxParam
                  id={cardFox.id}
                  paramName={"Age"}
                  paramValue={cardFox.age}
                  isOpenCard={isOpenCard}
                />
                <FoxParam
                  id={cardFox.id}
                  paramName={"Location"}
                  paramValue={cardFox.location}
                  isOpenCard={isOpenCard}
                />
              </div>
            </div>
            <div className="foxDescr">
              <motion.p
                key={`description${cardFox.id}`}
                initial={{ opacity: 0, scale: 0.3, filter: "blur(20px)" }}
                animate={
                  isOpenCard
                    ? { opacity: 1, scale: 1, filter: "blur(0px)" }
                    : { opacity: 0, scale: 0.3, filter: "blur(20px)" }
                }
                transition={{ duration: 0.5 }}
              >
                {cardFox.description}
              </motion.p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between  ",
                alignItems: "center",
                marginTop: "1rem",
                padding: "0 1rem",
              }}
            >
              <p
                style={{
                  textTransform: "uppercase",
                }}
              >
                Favorite Genre
              </p>
              <motion.span
                key={`fav_gen${cardFox.id}`}
                initial={{ scaleY: 0 }}
                animate={isOpenCard ? { scaleY: 1 } : { scaleY: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                  color: "#1bd6de",
                  fontSize: "1.1rem",
                  textTransform: "uppercase",
                }}
              >
                {cardFox.fav_genre}
              </motion.span>
            </div>
          </div>

          <div style={{ width: "50%", padding: "0 2%" }}>
            <div className="progressBlock">
              <ProgressItem
                progressParam={cardFox.progress.param1}
                icon={<BsRocketFill />}
                isOpenCard={isOpenCard}
              />
              <ProgressItem
                progressParam={cardFox.progress.param2}
                icon={<BsFillStarFill />}
                isOpenCard={isOpenCard}
              />
              <ProgressItem
                progressParam={cardFox.progress.param3}
                icon={<BsFillLightningFill />}
                isOpenCard={isOpenCard}
              />
            </div>
            <div className="items">
              <FoxDataItem
                id={cardFox.id}
                itemName={"Population"}
                itemValue={cardFox.population}
                isOpenCard={isOpenCard}
              />

              <FoxDataItem
                id={cardFox.id}
                itemName={"Flights"}
                itemValue={cardFox.flights}
                isOpenCard={isOpenCard}
              />

              <FoxDataItem
                id={cardFox.id}
                itemName={"Stars"}
                itemValue={cardFox.stars}
                isOpenCard={isOpenCard}
              />

              <FoxDataItem
                id={cardFox.id}
                itemName={"Energy"}
                itemValue={cardFox.energy}
                isOpenCard={isOpenCard}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
