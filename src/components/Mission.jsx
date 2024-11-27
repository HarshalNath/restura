import mission from "../assets/mission.mp4";
import missionimg from "../assets/mission.jpeg";
import { MISSION } from "../constants";

const Mission = () => {
  return (
    <section id="mission ">
      <div className="container mx-auto text-center p-8">
        <h2 className="text-3xl lg:text-4xl tracking-tight text-center mb-8">
          Our Mission
        </h2>
        {/*  */}
        <div className="relative flex justify-center items-center">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-[90%] rounded-3xl"
            poster={missionimg}
          >
            <source src={mission} type="video/mp4" />
          </video>
          <div className="absolute w-full h-full rounded-3xl bg-black/40"></div>
          <p className="absolute lg:text-3xl max-w-lg tracking-tighter">
            {MISSION}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
