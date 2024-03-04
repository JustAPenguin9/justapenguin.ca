/**
 * @param {string} character
 * @returns {string | null} null when the character is not valid
 */
export function getCharacter(character) {
	switch (character.toLowerCase()) {
		case "reimu":
			return "Reimu Hakurei";
		case "marisa":
			return "Marisa Kirisame";
		case "ichirin":
			return "Ichirin Kumoi";
		case "byakuren":
			return "Byakuren Hijiri";
		case "futo":
			return "Mononobe no Futo";
		case "miko":
			return "Toyosatomimi no Miko";
		case "nitori":
			return "Nitori Kawashiro";
		case "koishi":
			return "Koishi Komeiji";
		case "mamizou":
			return "Mamizou Futatsuiwa";
		case "kokoro":
			return "Hata no Kokoro";
		case "kasen":
			return "Kasen Ibaraki";
		case "mokou":
			return "Fujiwara no Mokou";
		case "sukuna":
			return "Shinmyoumaru Sukuna";
		case "sumireko":
			return "Sumireko Usami";
		case "reisen":
			return "Reisen Udongein Inaba";
		case "doremy":
			return "Doremy Sweet";
		case "tenshi":
			return "Tenshi Hinanawi";
		case "yukari":
			return "Yukari Yakumo";
		case "joon":
			return "Joon Yorigami";
		default:
			return null;
	}
}
