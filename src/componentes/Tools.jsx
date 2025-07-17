import {
  AsteriskIcon,
  CaseUpperIcon,
  CopyIcon,
  MoveHorizontal,
  PlusIcon,
  TypeIcon,
} from "lucide-solid";
import { createSignal, For, Show } from "solid-js";

const unicodeStyles = [
  {
    name: "Bold Serif",
    map: {
      A: "𝐀",
      B: "𝐁",
      C: "𝐂",
      D: "𝐃",
      E: "𝐄",
      F: "𝐅",
      G: "𝐆",
      H: "𝐇",
      I: "𝐈",
      J: "𝐉",
      K: "𝐊",
      L: "𝐋",
      M: "𝐌",
      N: "𝐍",
      O: "𝐎",
      P: "𝐏",
      Q: "𝐐",
      R: "𝐑",
      S: "𝐒",
      T: "𝐓",
      U: "𝐔",
      V: "𝐕",
      W: "𝐖",
      X: "𝐗",
      Y: "𝐘",
      Z: "𝐙",
      a: "𝐚",
      b: "𝐛",
      c: "𝐜",
      d: "𝐝",
      e: "𝐞",
      f: "𝐟",
      g: "𝐠",
      h: "𝐡",
      i: "𝐢",
      j: "𝐣",
      k: "𝐤",
      l: "𝐥",
      m: "𝐦",
      n: "𝐧",
      o: "𝐨",
      p: "𝐩",
      q: "𝐪",
      r: "𝐫",
      s: "𝐬",
      t: "𝐭",
      u: "𝐮",
      v: "𝐯",
      w: "𝐰",
      x: "𝐱",
      y: "𝐲",
      z: "𝐳",
      á: "𝐚́",
      é: "𝐞́",
      í: "𝐢́",
      ó: "𝐨́",
      ú: "𝐮́",
      à: "𝐚̀",
      è: "𝐞̀",
      ì: "𝐢̀",
      ò: "𝐨̀",
      ù: "𝐮̀",
      â: "𝐚̂",
      ê: "𝐞̂",
      î: "𝐢̂",
      ô: "𝐨̂",
      û: "𝐮̂",
      ã: "𝐚̃",
      õ: "𝐨̃",
      ç: "𝐜̧",
    },
  },
  {
    name: "𝗕𝗼𝗹𝗱 𝗦𝗮𝗻𝘀",
    map: Object.fromEntries(
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        .split("")
        .map((c, i) => [c, String.fromCodePoint(0x1d5d4 + i)])
    ),
  },
  {
    name: "𝘼𝙡𝙩 𝙄𝙩𝙖𝙡𝙞𝙘 𝙎𝙖𝙣𝙨",
    map: Object.fromEntries(
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        .split("")
        .map((c, i) => [c, String.fromCodePoint(0x1d63c + i)])
    ),
  },
  {
    name: "𝘈𝘭𝘵 𝘈𝘪𝘳𝘺",
    map: Object.fromEntries(
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        .split("")
        .map((c, i) => [c, String.fromCodePoint(0x1d434 + i)])
    ),
  },
  {
    name: "𝑩𝒐𝒍𝒅 𝑰𝒕𝒂𝒍𝒊𝒄",
    map: Object.fromEntries(
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        .split("")
        .map((c, i) => [c, String.fromCodePoint(0x1d468 + i)])
    ),
  },
  {
    name: "𝙈𝙤𝙣𝙤𝙨𝙥𝙖𝙘𝙚",
    map: Object.fromEntries(
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        .split("")
        .map((c, i) => [c, String.fromCodePoint(0x1d670 + i)])
    ),
  },
  {
    name: "Ｆｕｌｌ ｗｉｄｔｈ",
    map: Object.fromEntries(
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        .split("")
        .map((c, i) => [
          c,
          String.fromCodePoint(0xff21 + (i >= 26 ? i - 26 : i)),
        ])
    ),
  },
  {
    name: "𝔻𝕠𝕦𝕓𝕝𝕖 𝕊𝕥𝕣𝕦𝕔𝕜",
    map: Object.fromEntries(
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        .split("")
        .map((c, i) => [
          c,
          String.fromCodePoint(0x1d538 + (i >= 26 ? i - 26 + 26 : i)),
        ])
    ),
  },
  {
    name: "𝔊𝔬𝔱𝔥𝔦𝔠",
    map: Object.fromEntries(
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        .split("")
        .map((c, i) => [c, String.fromCodePoint(0x1d504 + i)])
    ),
  },
  {
    name: "𝓢𝓬𝓻𝓲𝓹𝓽",
    map: Object.fromEntries(
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        .split("")
        .map((c, i) => [c, String.fromCodePoint(0x1d4d0 + i)])
    ),
  },
  {
    name: "T̶e̶x̶t̶o̶ ̶r̶a̶s̶u̶r̶a̶d̶o̶",
    map: Object.fromEntries(
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        .split("")
        .map((c) => [c, c + "\u0336"])
    ), // strikethrough
  },
  {
    name: "ꜱᴍᴀʟʟ ᴄᴀᴘꜱ",
    map: {
      a: "ᴀ",
      b: "ʙ",
      c: "ᴄ",
      d: "ᴅ",
      e: "ᴇ",
      f: "ꜰ",
      g: "ɢ",
      h: "ʜ",
      i: "ɪ",
      j: "ᴊ",
      k: "ᴋ",
      l: "ʟ",
      m: "ᴍ",
      n: "ɴ",
      o: "ᴏ",
      p: "ᴘ",
      q: "ǫ",
      r: "ʀ",
      s: "ꜱ",
      t: "ᴛ",
      u: "ᴜ",
      v: "ᴠ",
      w: "ᴡ",
      x: "x",
      y: "ʏ",
      z: "ᴢ",
      A: "A",
      B: "B",
      C: "C",
      D: "D",
      E: "E",
      F: "F",
      G: "G",
      H: "H",
      I: "I",
      J: "J",
      K: "K",
      L: "L",
      M: "M",
      N: "N",
      O: "O",
      P: "P",
      Q: "Q",
      R: "R",
      S: "S",
      T: "T",
      U: "U",
      V: "V",
      W: "W",
      X: "X",
      Y: "Y",
      Z: "Z",
    },
  },
  {
    name: "ƬΣXƬӨ ɢʀᴇᴇᴋ",
    map: {
      T: "Ƭ",
      e: "Σ",
      s: "Ƨ",
      t: "Ƭ",
      d: "D",
      x: "X",
      o: "Ө",
      a: "Λ",
      i: "Ι",
      u: "Ц",
      r: "Я",
      n: "И",
      c: "Ͼ",
      l: "L",
      A: "Λ",
      E: "Σ",
      O: "Θ",
      D: "Ð",
      X: "Ж",
    },
  },
  // Adicione os outros estilos aqui conforme necessário
];

function transformText(text, map) {
  return text
    .split("")
    .map((char) => map[char] || char)
    .join("");
}

function getText(text, uppercase, tracking) {
  return (uppercase ? text.toUpperCase() : text)
    .split("")
    .join(
      tracking === "wide"
        ? "\u00A0"
        : tracking === "widest"
        ? "\u00A0\u00A0"
        : ""
    );
}

export default function UnicodeFonts() {
  const [text, setText] = createSignal("");

  const [isUppercase, setIsUppercase] = createSignal(false);
  const [isTracking, setIsTracking] = createSignal("normal");

  const [isFont, setIsFont] = createSignal(false);

  return (
    <div className="flex-col">
      <div class="flex border-b justify-between md:justify-start">
        <button
          class={`p-8 ${isUppercase() ? "bg-zinc-100 text-zinc-950" : ""}`}
          onClick={() => setIsUppercase(!isUppercase())}
        >
          <CaseUpperIcon class="size-16" />
        </button>
        <button
          class={`p-8 relative ${
            isTracking() !== "normal" ? "bg-zinc-100 text-zinc-950" : ""
          }`}
          onClick={() =>
            setIsTracking(
              isTracking() === "normal"
                ? "wide"
                : isTracking() === "wide"
                ? "widest"
                : "normal"
            )
          }
        >
          <MoveHorizontal class="size-16" />
          {isTracking() === "widest" && (
            <AsteriskIcon class="size-12 absolute top-2 right-2" />
          )}
        </button>
        <button
          class={`p-8 ${isFont() ? "bg-zinc-100 text-zinc-950" : ""}`}
          onClick={() => setIsFont(!isFont())}
        >
          <TypeIcon class="size-16" />
        </button>
      </div>
      <div className="p-8">
        <input
          value={text()}
          class="text-2xl bg-zinc-900 p-8 w-full mb-4 outline-none focus:ring-2"
          onInput={(e) => setText(e.target.value)}
          placeholder="Seu texto aqui"
        />
        <Show when={isUppercase() || isTracking() !== "normal"}>
          <TextLine text={getText(text(), isUppercase(), isTracking())}>
            {getText(text(), isUppercase(), isTracking())}
          </TextLine>
        </Show>
        <Show when={isFont()}>
          <div className="flex flex-col gap2">
            <For each={unicodeStyles}>
              {(style) => {
                return (
                  <TextLine
                    text={transformText(
                      getText(text(), isUppercase(), isTracking()),
                      style.map
                    )}
                  >
                    <div class="text-sm">{style.name}</div>
                    <div class="mt-2">
                      {transformText(
                        getText(text(), isUppercase(), isTracking()),
                        style.map
                      )}
                    </div>
                  </TextLine>
                );
              }}
            </For>
          </div>
        </Show>
      </div>
    </div>
  );
}

const TextLine = (props) => {
  const handleCopy = async (copyText) => {
    try {
      await navigator.clipboard.writeText(copyText);
      alert("Copiado!");
    } catch (err) {
      console.error("Erro ao copiar:", err);
    }
  };

  return (
    <div
      class="p-8 text-xl  font-medium border items-center flex justify-between"
      onClick={(e) => handleCopy(props.text)}
    >
      <div>{props.children}</div>
      <div>
        <CopyIcon class="size-8" />
      </div>
    </div>
  );
};
