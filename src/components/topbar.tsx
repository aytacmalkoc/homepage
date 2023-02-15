export default function Topbar() {
  return (
    <div
      className="position-relative position-fixed start-0 end-0 w-full text-white p-3 text-center"
      style={{
        backgroundColor: "var(--bs-dark)",
        zIndex: 99,
      }}
    >
      <h6 className="fs-6 text-white">
        Turkey has been hit by earthquakes reaching magnitudes of 7.7. Please
        help us by donating to{" "}
        <a
          href="https://ahbap.org/disasters-turkey"
          target={"_blank"}
          rel={"noreferrer"}
          className="text-success text-decoration-underline"
        >
          Ahbap <i className="fa fa-heart ml-2"></i>
        </a>
        .
      </h6>
    </div>
  );
}
