import photo from "../assets/images/Glenda1.jpg";

function Abouther() {
  return (
    <div className="aboutHer-container">
      <p className="grandmaBio">
        Her name was Glenda Martin or grandma to me. Here are a few things said
        about her from her children
      </p>
      <img className="myPhoto" src={photo}></img>
      <p className="childrenBio">
        I've met some pretty extraordinary people as I travelled my journey -
        doctors, presidents, authors, ordinary people doing great things and
        great people doing ordinary things. It turns out that one of the most
        extraordinary of all of them was a woman I called mom. I've been lucky
        to learn from her and dad and anything I may accomplish or may have
        accomplished is because they enabled and empowered me to do so. I was so
        proud that she saw me walk for my doctorate. I know she'll be watching
        for the next milestone achievement and know that she played an important
        role in that one as well. I love you mom and I'll miss you. -Don Martin
      </p>
      <p className="childrenBio">
        In you, I have lost my biggest cheerleader. No one ever believed in me
        the way that you did. You're the first person I called after every
        victory, no matter how big or small. And, you're the first person I
        called when things got tough. You always knew how to soothe me when I
        didn't feel well. I can't imagine there is anyone else that could make
        me laugh in the middle of the infusion room. Every movie preview, every
        Don Williams song, every evening on my drive home from work, I reach for
        my phone. I don't know how to do this without you. -Cindy Martin
      </p>
    </div>
  );
}
export default Abouther;
