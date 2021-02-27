const SocialIcons = {
  Facebook: {
    IconClass: "social-facebook",
    UrlPrepend: "https://www.facebook.com/"
  },
  Twitter: {
    IconClass: "social-twitter",
    UrlPrepend: "https://twitter.com/"
  },
  LinkedIn: {
    IconClass: "social-linkedin",
    UrlPrepend: "https://www.linkedin.com/in/"
  },
  Instagram: {
    IconClass: "social-instagram",
    UrlPrepend: "https://www.instagram.com/"
  },
  Quora: {
    IconClass: "question",
    UrlPrepend: "https://www.quora.com/"
  },
  YouTube: {
    IconClass: "social-youtube",
    UrlPrepend: "https://www.youtube.com/"
  },
  Reddit: {
    IconClass: "social-reddit",
    UrlPrepend: "https://www.reddit.com/"
  },
  Website: {
    IconClass: "globe",
    UrlPrepend: ""
  },
  Phone: {
    IconClass: "screen-smartphone",
    UrlPrepend: "tel:"
  }
};
const Icon = ({ Network, Profile }) => (
  <a
    href={SocialIcons[Network].UrlPrepend + Profile}
    className="btn btn-outline-success mr-2 btn-sm"
  >
    <i className={"icon-" + SocialIcons[Network].IconClass}></i>
    {Network === "Phone" ? " " + Profile : null}
  </a>
);

export default Icon;
