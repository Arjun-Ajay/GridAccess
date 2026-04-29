(function () {

  const STANDS = [
    {
      id: "grandstand",
      name: "Grandstand A",
      description: "Main straight view • Covered seating • Best overtaking action",
      icon: "🏁",
      price: 29000,
    },
    {
      id: "premium",
      name: "Premium Terrace",
      description: "Elevated panoramic view • Lounge access • Complimentary food",
      icon: "⭐",
      price: 52000,
    },
    {
      id: "vip",
      name: "VIP Paddock Club",
      description: "Pit lane access • Meet drivers • Luxury hospitality suite",
      icon: "👑",
      price: 95000,
    },
  ];

  /* ── Inject CSS ── */
  const style = document.createElement("style");
  style.textContent = `
    .bk-overlay {
      position: fixed; inset: 0; z-index: 9999;
      background: rgba(0,0,0,0.72);
      display: flex; align-items: center; justify-content: center;
      padding: 1rem;
      animation: bk-fadein .18s ease;
    }
    @keyframes bk-fadein { from { opacity:0 } to { opacity:1 } }
    @keyframes bk-slidein { from { transform:translateY(24px); opacity:0 } to { transform:translateY(0); opacity:1 } }

    .bk-modal {
      background: #0f0f0f;
      border: 1px solid #2a2a2a;
      border-radius: 16px;
      width: 100%; max-width: 560px;
      max-height: 90vh; overflow-y: auto;
      padding: 2rem;
      font-family: 'Segoe UI', sans-serif;
      animation: bk-slidein .22s ease;
      position: relative;
    }

    .bk-close {
      position: absolute; top: 1.2rem; right: 1.2rem;
      background: #1e1e1e; border: 1px solid #333;
      color: #aaa; width: 32px; height: 32px;
      border-radius: 50%; cursor: pointer; font-size: 16px;
      display: flex; align-items: center; justify-content: center;
      transition: background .15s, color .15s;
    }
    .bk-close:hover { background: #e10600; color: #fff; border-color: #e10600; }

    .bk-race-name {
      font-size: 11px; letter-spacing: 2px; color: #e10600;
      text-transform: uppercase; margin-bottom: 4px;
    }
    .bk-modal h2 {
      color: #fff; font-size: 1.4rem; margin: 0 0 0.3rem;
    }
    .bk-modal .bk-location {
      color: #888; font-size: 13px; margin-bottom: 1.5rem;
    }

    .bk-section-label {
      font-size: 11px; letter-spacing: 1.5px; color: #666;
      text-transform: uppercase; margin-bottom: 0.8rem;
    }

    .bk-stands { display: flex; flex-direction: column; gap: 10px; margin-bottom: 1.5rem; }

    .bk-stand {
      border: 1.5px solid #222; border-radius: 12px;
      padding: 14px 16px; cursor: pointer;
      display: flex; align-items: center; gap: 14px;
      transition: border-color .15s, background .15s;
      background: #131313;
    }
    .bk-stand:hover { border-color: #444; background: #181818; }
    .bk-stand.selected { border-color: #e10600; background: #1a0500; }

    .bk-stand-icon { font-size: 22px; flex-shrink: 0; }
    .bk-stand-info { flex: 1; }
    .bk-stand-info strong { color: #fff; font-size: 15px; display: block; margin-bottom: 2px; }
    .bk-stand-info span { color: #777; font-size: 12px; line-height: 1.4; display: block; }
    .bk-stand-price { color: #fff; font-size: 14px; font-weight: 600; text-align: right; white-space: nowrap; }
    .bk-stand-price small { display: block; color: #666; font-size: 10px; font-weight: 400; }

    .bk-persons-row {
      display: flex; align-items: center; gap: 14px;
      background: #131313; border: 1.5px solid #222;
      border-radius: 12px; padding: 14px 16px;
      margin-bottom: 1.5rem;
    }
    .bk-persons-label { color: #aaa; font-size: 14px; flex: 1; }
    .bk-counter {
      display: flex; align-items: center; gap: 12px;
    }
    .bk-counter button {
      width: 32px; height: 32px; border-radius: 50%;
      border: 1.5px solid #333; background: #1e1e1e;
      color: #fff; font-size: 18px; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      transition: background .15s, border-color .15s;
      line-height: 1;
    }
    .bk-counter button:hover { background: #e10600; border-color: #e10600; }
    .bk-counter button:disabled { opacity: .3; cursor: not-allowed; }
    .bk-counter button:disabled:hover { background: #1e1e1e; border-color: #333; }
    .bk-count-display { color: #fff; font-size: 20px; font-weight: 600; min-width: 28px; text-align: center; }

    .bk-summary {
      background: #131313; border: 1px solid #222;
      border-radius: 10px; padding: 14px 16px;
      margin-bottom: 1.5rem;
    }
    .bk-summary-row { display: flex; justify-content: space-between; font-size: 13px; color: #888; margin-bottom: 6px; }
    .bk-summary-total { display: flex; justify-content: space-between; font-size: 16px; color: #fff; font-weight: 600; border-top: 1px solid #222; padding-top: 10px; margin-top: 4px; }

    .bk-book-btn {
      width: 100%; padding: 14px;
      background: #e10600; border: none; border-radius: 10px;
      color: #fff; font-size: 15px; font-weight: 700;
      letter-spacing: 1px; text-transform: uppercase;
      cursor: pointer; transition: background .15s, transform .1s;
    }
    .bk-book-btn:hover { background: #c40000; transform: translateY(-1px); }
    .bk-book-btn:active { transform: translateY(0); }
    .bk-book-btn:disabled { background: #333; color: #666; cursor: not-allowed; transform: none; }

    .bk-success {
      text-align: center; padding: 2rem 1rem;
    }
    .bk-success .bk-tick { font-size: 48px; margin-bottom: 1rem; }
    .bk-success h3 { color: #fff; font-size: 1.3rem; margin-bottom: 0.5rem; }
    .bk-success p { color: #888; font-size: 14px; }
  `;
  document.head.appendChild(style);

  /* ── State ── */
  let state = { stand: null, persons: 1, race: "", location: "" };

  /* ── Build Modal DOM ── */
  function buildModal() {
    const overlay = document.createElement("div");
    overlay.className = "bk-overlay";
    overlay.addEventListener("click", (e) => { if (e.target === overlay) closeModal(); });

    const modal = document.createElement("div");
    modal.className = "bk-modal";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");

    /* close button */
    const closeBtn = document.createElement("button");
    closeBtn.className = "bk-close";
    closeBtn.innerHTML = "✕";
    closeBtn.setAttribute("aria-label", "Close booking");
    closeBtn.addEventListener("click", closeModal);
    modal.appendChild(closeBtn);

    /* race label */
    const raceLabel = document.createElement("p");
    raceLabel.className = "bk-race-name";
    raceLabel.textContent = "Book Your Tickets";
    modal.appendChild(raceLabel);

    const title = document.createElement("h2");
    title.id = "bk-title";
    modal.appendChild(title);

    const loc = document.createElement("p");
    loc.className = "bk-location";
    loc.id = "bk-location";
    modal.appendChild(loc);

    /* stands */
    const standLabel = document.createElement("p");
    standLabel.className = "bk-section-label";
    standLabel.textContent = "Choose Your Stand";
    modal.appendChild(standLabel);

    const standsWrap = document.createElement("div");
    standsWrap.className = "bk-stands";

    STANDS.forEach((s) => {
      const card = document.createElement("div");
      card.className = "bk-stand";
      card.dataset.id = s.id;
      card.setAttribute("role", "radio");
      card.setAttribute("tabindex", "0");
      card.innerHTML = `
        <div class="bk-stand-icon">${s.icon}</div>
        <div class="bk-stand-info">
          <strong>${s.name}</strong>
          <span>${s.description}</span>
        </div>
        <div class="bk-stand-price">
          ₹${s.price.toLocaleString("en-IN")}
          <small>per person</small>
        </div>
      `;
      card.addEventListener("click", () => selectStand(s.id));
      card.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") selectStand(s.id); });
      standsWrap.appendChild(card);
    });
    modal.appendChild(standsWrap);

    /* persons counter */
    const personsRow = document.createElement("div");
    personsRow.className = "bk-persons-row";
    personsRow.innerHTML = `
      <span class="bk-persons-label">👥 Number of Persons</span>
      <div class="bk-counter">
        <button id="bk-dec" aria-label="Decrease">−</button>
        <span class="bk-count-display" id="bk-count">1</span>
        <button id="bk-inc" aria-label="Increase">+</button>
      </div>
    `;
    modal.appendChild(personsRow);

    /* summary */
    const summary = document.createElement("div");
    summary.className = "bk-summary";
    summary.id = "bk-summary";
    summary.innerHTML = `
      <div class="bk-summary-row"><span>Stand</span><span id="bk-sum-stand">—</span></div>
      <div class="bk-summary-row"><span>Persons</span><span id="bk-sum-persons">1</span></div>
      <div class="bk-summary-row"><span>Price per person</span><span id="bk-sum-ppp">—</span></div>
      <div class="bk-summary-total"><span>Total</span><span id="bk-sum-total">—</span></div>
    `;
    modal.appendChild(summary);

    /* book button */
    const bookBtn = document.createElement("button");
    bookBtn.className = "bk-book-btn";
    bookBtn.id = "bk-book-btn";
    bookBtn.textContent = "CONFIRM BOOKING";
    bookBtn.disabled = true;
    bookBtn.addEventListener("click", confirmBooking);
    modal.appendChild(bookBtn);

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    /* wire counter */
    document.getElementById("bk-dec").addEventListener("click", () => changePersons(-1));
    document.getElementById("bk-inc").addEventListener("click", () => changePersons(1));

    return overlay;
  }

  let overlayEl = null;

  function openModal(raceName, location) {
    state = { stand: null, persons: 1, race: raceName, location };
    overlayEl = buildModal();
    document.getElementById("bk-title").textContent = raceName;
    document.getElementById("bk-location").textContent = location;
    updateSummary();
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    if (overlayEl) { overlayEl.remove(); overlayEl = null; }
    document.body.style.overflow = "";
  }

  function selectStand(id) {
    state.stand = id;
    document.querySelectorAll(".bk-stand").forEach((el) => {
      el.classList.toggle("selected", el.dataset.id === id);
      el.setAttribute("aria-checked", el.dataset.id === id ? "true" : "false");
    });
    updateSummary();
  }

  function changePersons(delta) {
    state.persons = Math.max(1, Math.min(10, state.persons + delta));
    document.getElementById("bk-count").textContent = state.persons;
    document.getElementById("bk-dec").disabled = state.persons <= 1;
    document.getElementById("bk-inc").disabled = state.persons >= 10;
    updateSummary();
  }

  function updateSummary() {
    const s = STANDS.find((x) => x.id === state.stand);
    const standName = s ? s.name : "—";
    const ppp = s ? `₹${s.price.toLocaleString("en-IN")}` : "—";
    const total = s ? `₹${(s.price * state.persons).toLocaleString("en-IN")}` : "—";

    document.getElementById("bk-sum-stand").textContent = standName;
    document.getElementById("bk-sum-persons").textContent = state.persons;
    document.getElementById("bk-sum-ppp").textContent = ppp;
    document.getElementById("bk-sum-total").textContent = total;

    const btn = document.getElementById("bk-book-btn");
    if (btn) btn.disabled = !state.stand;
  }

  function confirmBooking() {
    const s = STANDS.find((x) => x.id === state.stand);
    const modal = document.querySelector(".bk-modal");
    if (!modal || !s) return;

    modal.innerHTML = `
      <div class="bk-success">
        <div class="bk-tick">🏎️</div>
        <h3>Booking Confirmed!</h3>
        <p style="color:#e10600; font-weight:600; font-size:16px; margin:0.5rem 0 1rem;">${state.race}</p>
        <p>${s.icon} ${s.name} &nbsp;•&nbsp; ${state.persons} person${state.persons > 1 ? "s" : ""}</p>
        <p style="margin-top:0.5rem; font-size:18px; color:#fff; font-weight:700;">
          Total: ₹${(s.price * state.persons).toLocaleString("en-IN")}
        </p>
        <p style="margin-top:1.5rem; font-size:12px; color:#555;">A confirmation will be sent to your registered email.</p>
        <button class="bk-book-btn" style="margin-top:1.5rem;" onclick="document.querySelector('.bk-overlay').remove(); document.body.style.overflow='';">
          DONE
        </button>
      </div>
    `;
  }

  /* ── Hook up all "Book Now" buttons ── */
  document.addEventListener("DOMContentLoaded", wire);
  if (document.readyState !== "loading") wire();

  function wire() {
    document.querySelectorAll(".ticket-card:not(.completed) button").forEach((btn) => {
      if (btn.textContent.trim().startsWith("Book Now")) {
        btn.addEventListener("click", () => {
          const card = btn.closest(".ticket-card");
          const raceName = card.querySelector("h2")?.textContent || "Grand Prix";
          const location = card.querySelector("p")?.textContent || "";
          openModal(raceName, location);
        });
      }
    });
  }

  /* ── Close on Escape ── */
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && overlayEl) closeModal(); });

})();