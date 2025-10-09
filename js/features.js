window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('fade-in');
});

document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', e => {
        const href = link.getAttribute('href');
        if (!href || href.startsWith('#') || href.startsWith('mailto:')) return;

        e.preventDefault();
        document.body.classList.remove('fade-in');
        document.body.classList.add('fade-out');

        setTimeout(() => {
            window.location.href = href;
        }, 300);
    });
});

const menus = {
  "non menu features": [
    { name: "auto set 18 class slots once loaded in", tags: [] },
    { name: "quick fast restart / quit at game end", tags: [] },
    { name: "timer stuck between 1:00 - 2:45", tags: [] },
    { name: "change class anytime", tags: [] },
    { name: "unlimted lives", tags: [] },
    { name: "match bonus", tags: [], conditional: { plutonium: "reverted color to match steam / console" } },
    { name: "no plutonium watermark", tags: ["plutonium"] },
    { name: "saving between launches", tags: ["plutonium"] },
    { name: "saving between games", tags: ["solo", "!plutonium"]},
  ],
  "main": [
    { name: "drop current weapon, canswap, riot-sheild, or ballistic knife", tags: [] },
    { name: "refill your current streaks or give yourself close to any streak", tags: [] },
    { name: "set radar to sweeping, constant or off", tags: [] },
    { name: "toggle godmode", tags: [] },
    { name: "toggle noclip", tags: ["membership"] },

    { name: "spawnables", submenu: [
      { name: "spawn a fake bounce on yourself", tags: ["membership"]  },
      { name: "delete bounce", tags: ["membership"]  },
      { name: "spawn care package on yourself", tags: ["membership"]  },
      { name: "spawn care package to crosshairs", tags: ["membership"]  },
      { name: "spawn care package elevator on yourself", tags: ["membership"]  },
      { name: "spawn care package elevator to crosshairs", tags: ["membership"]  },
      { name: "spawn care package stall on yourself", tags: ["membership"]  },
      { name: "spawn care package stall to crosshairs", tags: ["membership"]  },
      { name: "delete all exsisting care packages", tags: ["membership"]  },
      { name: "force spawn riot-shield on yourself", tags: ["membership"]  },
      { name: "spawn invisible platform", tags: ["membership"], conditional: { plutonium: "platform does not work with no barriers!" }  },
      { name: "toggle platform corners", tags: ["membership"]},
      { name: "delete any exsisting platform", tags: ["membership"]},
  ], 
  tags: ["membership"] },

    { name: "afterhits", submenu: [
      { name: "toggle empty clip on game end on/off, as well as changeable delay", tags: []  },
      { name: "toggle freeroam after game end on/off", tags: [] },
      { name: "toggle toughness animations on game end on/off", tags: [] },
      { name: "toggle auto prone on game end on/off", tags: [] },
      { name: "optional give weapon on game end, as well as changeable delay", tags: [] },
    ],
    },

    { name: "save position as well as changeable bind", tags: [] },
    { name: "load position as well as changeable bind", tags: [] }
  ],
  "weapons": [
    { name: "set camo slider with every camo named, aswell as  random, none, & disco camo", tags: [] },
    { name: "refill your current streaks or give yourself close to any streak", tags: [] },
    { name: "easily give yourself a claymore, ipad, bomb, or hacker mala", tags: [] },
    { name: "toggle infinite equipment on/off", tags: [] },
    { name: "toggle infinite ammo on/off", tags: [] },
    { name: "toggle permanent lb semtex on/off", tags: [] },
    { name: "toggle permanent mw3 grenade on/off", tags: [] },
    { name: "real instashoots, with the choice of current weapon, or all weapons", tags: ["plutonium"] },
    { name: "console instashoots, with the choice of current weapon, or all weapons", tags: [] },
    { name: "og console instashoots, with the choice of current weapon, or current weapon category", tags: [] },
    { name: "toggle infinite canswap for all weapons on/off", tags: [] },
    { name: "set auto canswap anim for current weapon or all weapons", tags: ["plutonium"] },
    { name: "auto canswap current weapon or current weapon category", tags: [] },
    { name: "toggle the instapumps feature on/off", tags: ["membership"] },
    { name: "toggle the always mala swap feature on/off", tags: ["membership"] },
    { name: "toggle permanent alt swap on/of", tags: [] },
    { name: "give yourself a quick mala swap", tags: [] }
  ],
  "aimbot": [
    { name: "toggle aimbot on/off", tags: [] },
    { name: "set aimbot weapon, current weapon or all weapons", tags: [] },
    { name: "set second aimbot weapon, current weapon or current weapon category", tags: [] },
    { name: "set the aimbot range to anywhere, or to keep using the selected range", tags: [] },
    { name: "slider of aimbot range, with a interval changer below", tags: [] },
    
    { name: "hitmarker menu", submenu: [
        { name: "toggle hitmarker aimbot on/off", tags: ["membership"] },
        { name: "set hitmarker aimbot weapon, current weapon or all weapons", tags: ["membership"] },
        { name: "set 2nd hitmarker aimbot weapon, current weapon or weapon category", tags: ["membership"] },
        { name: "set the hitmarker aimbot range to everywhere, or the range slider", tags: ["membership"] },
        { name: "slider of hitmarker aimbot range, with a interval changer below", tags: ["membership"] }        
    ],
    tags: ["membership"] },
  ],
  "binds": [
    { name: "class change bind, with class selection, and actions on class change", tags: [] },
    { name: "bolt movement, with movement reccorder and qol editing options", tags: ["membership"] },
    { name: "velocity, with track velocity and qol editing options", tags: ["membership"] },
    { name: "bot bolt movement & options, bot veloctiy & options, & more bot actions", tags: ["membership"] },
    { name: "animation repeater bind", tags: ["membership"] },
    { name: "gun flicker bind", tags: ["membership"] },
    { name: "flash bind", tags: ["membership"] },
    { name: "blackscreen bind", tags: ["membership"] },
    { name: "stun bind", tags: ["membership"] },
    { name: "damage bind", tags: ["membership"] },
    { name: "fake nac bind", tags: [] },
    { name: "illusion bind", tags: [] },
    { name: "vish bind", tags: [] },
    { name: "instaswap bind", tags: [] },
    { name: "canzoom bind", tags: [] },
    { name: "fake scavenger pack empty clip bind", tags: [] },
    { name: "thermal gun bind", tags: [] },
    { name: "force prone bind, with an optional quick stand after option", tags: [] },
    { name: "set ammo bind, with adjustable ammo amount slider", tags: [] },
    { name: "killcam thirdeye bind", tags: [] },
    { name: "fake hitmarker bind", tags: [] }
  ],
  "bots": [
    { name: "spawn enemy team", tags: [] },
    { name: "teleport enemy team", tags: [] },
    { name: "make enemy team face you", tags: [] },
    { name: "set enemy team prestige", tags: [] },
    { name: "set enemy team level", tags: [] },
    { name: "spawn friendly team", tags: [] },
    { name: "teleport friendly team", tags: [] },
    { name: "make friendly team face you", tags: [] },
    { name: "set friendly team prestige", tags: [] },
    { name: "set friendly team level", tags: [] },
  ],
  "customization": [
    { name: "change menu open bind", tags: [] },
    { name: "change other menu open bind", tags: [] },
    { name: "change menu color", tags: [] },
    { name: "change menu alpha", tags: [] },
    { name: "change scroller alpha", tags: [] },
    { name: "change name", tags: ["plutonium"] },
    { name: "change clantag", tags: ["plutonium"] },
    { name: "change name color", tags: ["plutonium"] },
    { name: "reset name", tags: ["plutonium"] }
  ],
  "on spawn load": [
    { name: "load ammo and spawn load, with up to 3 weapons ammo settings", tags: ["membership"] },
    { name: "refresh alt-swap with spefific weapon", tags: ["membership"] },
    { name: "spawn care package at set coords", tags: ["membership"] },
    { name: "spawn care package stall at set coords", tags: ["membership"] },
    { name: "spawn care package elevator at set coords", tags: ["membership"] },    
    { name: "spawn pickupable canswap at set coords", tags: ["membership"] }
  ],
  "lobby": [
    { name: "set the score of both teams for the rest of the game", tags: [] },
    { name: "quick switch sides", tags: [] },
    { name: "remove sky death barrier", tags: [] },
    { name: "toggle all map barriers on/off", tags: ["plutonium"] },
    { name: "toggle depatch lunges on/off", tags: ["plutonium"] },
    { name: "toggle lower death barriers on/off", tags: [] },
    { name: "type in chat to force set a dvar to a certain value", tags: ["plutonium"] },
    { name: "player view pitch down slider", tags: ["plutonium"] },
    { name: "player view pitch up slider", tags: ["plutonium"] },
    { name: "ladder push velocity slider", tags: [] },
    { name: "player use distance slider", tags: [] },
    { name: "gravity slider", tags: [] },
    { name: "speed slider", tags: [] },
    { name: "timescale slider", tags: [] },
    { name: "knockback slider", tags: [] },
    { name: "ladder yawcap slider", tags: [] },
    { name: "prone yawcap slider", tags: [] },
    { name: "toggle jump slowdown", tags: [] },
    { name: "toggle unlimited sprint", tags: [] },
    { name: "toggle bullet mark fx", tags: [] },
    { name: "reset all dvars to their original value", tags: [] },
    { name: "toggle fake headbounces on/off", tags: [] },
  ],
  "players": [
    { name: "loads all players and bots in currently in the game for you to select", tags: [] },
    { name: "change players name through chat", tags: ["plutonium"] },
    { name: "change players clan tag through chat", tags: ["plutonium"] },
    { name: "change players name color", tags: ["plutonium"] },
    { name: "reset players name", tags: ["plutonium"] },
    { name: "teleport player to your crosshairs", tags: [] },
    { name: "teleport to players location", tags: [] },
    { name: "make player face you", tags: [] },
    { name: "give the player the weapon your currently holding", tags: [] },
    { name: "set the player to any stance of choice", tags: [] },
    { name: "respawn the player", tags: [] },
    { name: "toggle the player frozen on/off", tags: [] },
    { name: "kick the player", tags: [] },
  ],
  "clip cutting": [
    { name: "toggle weapon greenscreens on/off", tags: ["membership", "solo"] },
    { name: "switch the greenscreens color between green, red, blue, pink, yellow", tags: ["membership", "solo"] },
    { name: "toggle invisible weapon on/off", tags: ["membership", "solo"] },
    { name: "toggle in game hud on/off", tags: ["membership", "solo"] }
  ]
};

const menuContainer = document.getElementById("menus");
const checkboxes = document.querySelectorAll(".mode input");

function getActiveToggles() {
  return Array.from(checkboxes)
    .filter(c => c.checked)
    .map(c => c.id);
}

const tagColors = {
  solo: "#ff8ace",
  plutonium: "#93c4ff",
  membership: "#ffdc96"
};

function makeTagPrefix(tags) {
  if (!tags || !tags.length) return "";
  const clean = [...new Set(tags.filter(t => !t.startsWith("!")))];
  if (!clean.length) return "";
  return clean
    .map(tag => {
      const color = tagColors[tag] || "#aaa";
      return `<span style="color:${color};">${tag[0].toUpperCase()}:</span>`;
    })
    .join("");
}

function getSharedTags(items) {
  if (!items || !items.length) return [];

  let shared = new Set(items[0].tags ? items[0].tags.filter(t => !t.startsWith("!")) : []);

  for (let i = 1; i < items.length; i++) {
    const t = new Set(items[i].tags ? items[i].tags.filter(t => !t.startsWith("!")) : []);
    shared = new Set([...shared].filter(x => t.has(x)));
  }

  for (const item of items) {
    if (item.submenu) {
      const subShared = getSharedTags(item.submenu);
      shared = new Set([...shared].filter(x => subShared.includes(x)));
    }
  }

  return [...shared];
}

function renderItems(items, depth = 0, inheritedTags = []) {
  const container = document.createElement("div");
  container.classList.add(depth === 0 ? "menu-content" : "submenu");

  items.forEach(item => {
    const ownTags = (item.tags || []).filter(t => !t.startsWith("!"));
    const sharedTags = getSharedTags(item.submenu || []);
    const itemTags = item.submenu
      ? sharedTags
      : [...new Set([...ownTags, ...inheritedTags])];

    if (item.submenu) {
      const group = document.createElement("div");
      group.classList.add("menu-group");

      const header = document.createElement("div");
      header.classList.add("menu-header");

      const prefix = makeTagPrefix(sharedTags);
      header.innerHTML = `<span>${prefix ? prefix + " " : ""}${item.name}</span><span class="arrow">▼</span>`;

      const inner = renderItems(item.submenu, depth + 1, sharedTags.length ? sharedTags : ownTags);
      header.addEventListener("click", () => {
        inner.classList.toggle("open");
        header.querySelector(".arrow").style.transform = inner.classList.contains("open")
          ? "rotate(180deg)"
          : "rotate(0deg)";
      });

      group.appendChild(header);
      group.appendChild(inner);
      container.appendChild(group);
    } else {
      const feature = document.createElement("div");
      feature.classList.add("feature");
      feature.dataset.tags = itemTags.join(",");
      feature.dataset.conditional = JSON.stringify(item.conditional || {});

      if (itemTags.includes("solo")) feature.classList.add("solo");
      if (itemTags.includes("plutonium")) feature.classList.add("plutonium");
      if (itemTags.includes("membership")) feature.classList.add("membership");

      const prefix = makeTagPrefix(itemTags);
      feature.innerHTML = `${prefix ? prefix + " " : ""}${item.name}`;
      container.appendChild(feature);
    }
  });

  return container;
}

function renderMenus() {
  menuContainer.innerHTML = "";

  for (const [menuName, items] of Object.entries(menus)) {
    const sharedTags = getSharedTags(items);
    const prefix = makeTagPrefix(sharedTags);

    const group = document.createElement("div");
    group.classList.add("menu-group");

    const header = document.createElement("div");
    header.classList.add("menu-header");
    header.innerHTML = `<span>${prefix ? prefix + " " : ""}${menuName}</span><span class="arrow">▼</span>`;

    const content = renderItems(items, 0, sharedTags);
    header.addEventListener("click", () => {
      content.classList.toggle("open");
      header.querySelector(".arrow").style.transform = content.classList.contains("open")
        ? "rotate(180deg)"
        : "rotate(0deg)";
    });

    group.appendChild(header);
    group.appendChild(content);
    menuContainer.appendChild(group);
  }
}

function updateVisibility() {
  const active = getActiveToggles();

  document.querySelectorAll(".feature").forEach(f => {
    const tags = f.dataset.tags ? f.dataset.tags.split(",").filter(Boolean) : [];
    const cond = JSON.parse(f.dataset.conditional || "{}");

    const visible =
      tags.length === 0 || tags.some(tag => active.includes(tag));
    f.classList.toggle("hidden", !visible);

    const base = f.innerHTML.split(" [")[0];
    f.innerHTML = base;
    Object.keys(cond).forEach(tag => {
      if (active.includes(tag)) {
        f.innerHTML = `${base} [${cond[tag]}]`;
      }
    });
  });
}

checkboxes.forEach(c => c.addEventListener("change", updateVisibility));
renderMenus();
updateVisibility();

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("toggleRight");
  const rightPanel = document.querySelector(".right");
  const body = document.body;

  rightPanel.classList.remove("active");
  toggle.checked = false;
  body.classList.add("right-closed");

  toggle.addEventListener("change", () => {
    if (toggle.checked) {
      rightPanel.classList.add("active");
      body.classList.remove("right-closed");
    } else {
      rightPanel.classList.remove("active");
      body.classList.add("right-closed");
    }
  });
});

