// Featured Instagram reels from @eyecarebydrdiptishah.
//
// Each reel is shown as a fixed-ratio card that opens the reel on Instagram
// when clicked.
//
// HOW TO ADD OR CHANGE REELS:
//   - url:   the reel link (••• menu → "Copy link" on Instagram).
//   - cover: OPTIONAL. A cover image for the card. Drop a file in
//            /public/images/reels/ and set e.g. cover: "/images/reels/reel-1.jpg".
//            When omitted, the card shows a clean branded tile instead.

export type Reel = {
  url: string;
  cover?: string;
};

export const reels: Reel[] = [
  { url: "https://www.instagram.com/reel/DTH7YjKio1a/" },
  { url: "https://www.instagram.com/reel/DYmLAt8ziPo/" },
  { url: "https://www.instagram.com/reel/DYg8UWCy_i7/" },
  { url: "https://www.instagram.com/reel/DYY6dIPvxdx/" },
  { url: "https://www.instagram.com/reel/DYRwjnYTVZF/" },
  { url: "https://www.instagram.com/reel/DYMSa8IyrWn/" },
  { url: "https://www.instagram.com/reel/DYE31mIz_-B/" },
  { url: "https://www.instagram.com/reel/DX4cKzjymL5/" },
  { url: "https://www.instagram.com/reel/DXyOoqayXkd/" },
  { url: "https://www.instagram.com/reel/DXoil-QkiNp/" },
];
