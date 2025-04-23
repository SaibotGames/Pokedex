const Settings = ({ toggle, isDark }) => {
  return (
    <div>
      <div className={`theme-btn`} onClick={isDark ? toggle : null}>
        <i className={`bi bi-sun${isDark ? "" : "-fill"}`}></i>{" "}
      </div>
      <div className={`theme-btn `} onClick={!isDark ? toggle : null}>
        <i className={`bi bi-moon${isDark ? "-fill" : ""}`}></i>
      </div>
    </div>
  );
};

export default Settings;
