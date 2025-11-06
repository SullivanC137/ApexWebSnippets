function applyTitleHeaderClass() {
  if ($('#YOUR_SWITCH_ITEM').val() === '1') {
    const $region = $("#YOURHEADERTITLEREGION");

    // Achtergrond zwart en tekst wit maken
    $region
      .addClass("u-normal-bg")
      .find(".t-BreadcrumbRegion-titleText, .fa")
      .css("color", "white");

    // Kaarsje met warme flikkerende gloed toevoegen (één keer)
    if ($region.find('[aria-label="kaars"]').length === 0) {
      const $candle = $(`
        <span role="img" aria-label="kaars"
          style="
            color:#fff8dc;
            text-shadow: 0 0 6px #ffcc00, 0 0 12px #ff9900, 0 0 18px #ff6600;
            font-size:1.4em;
            margin-left:6px;
            vertical-align:middle;
            display:inline-block;
            transition:text-shadow 0.2s ease-in-out;
          ">
          🕯️
        </span>
      `);

      $region.find(".t-BreadcrumbRegion-titleText").append($candle);

      // Flikker-effect simuleren
      setInterval(() => {
        const intensity = Math.random() * 8 + 4; // willekeurige variatie
        $candle.css("text-shadow",
          `0 0 ${intensity}px #ffcc33, 0 0 ${intensity * 2}px #ff9900, 0 0 ${intensity * 3}px #ff6600`
        );
      }, 250);
    }
  }
}
