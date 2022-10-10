import { djmdPlaylist } from "./djmdPlaylist";

/** these are music tracks in the collection */
export interface djmdContent {
	/**
	 * `VARCHAR(255) PRIMARY KEY`
	 *
	 * like {@link djmdPlaylist.ID}
	 */
	ID: string;
	/**
	 * `VARCHAR(255) DEFAULT NULL`
	 *
	 * most of the time this is the regular windows file path as we know it with forward slashes and no "protocol" prefix like in the XML.
	 * this path *can* be **relative to the local dropbox folder** where it will start with a leading forward slash. further investigation needed 😎
	 *
	 * this value can also be the platform and identifier of cloud tracks like for soundcloud: `soundcloud:tracks:123456789`
	 */
	FolderPath: string;
	/**
	 * `VARCHAR(255) DEFAULT NULL`
	 *
	 * `NULL` for cloud tracks. for regular files, this appears to be simply the file name. this might be used for the tag information panel or for "auto relocate".
	 * also i believe this value and `FolderPath` can be out of sync when the file was renamed or moved and relocated, but i can't verify without coding a test.
	 */
	FileNameL: string | null;
	/**
	 * `VARCHAR(255) DEFAULT NULL`
	 *
	 * usually `NULL` or empty string, maybe the difference is just the rekordbox version where they cleaned something up.
	 * TODO not sure what this is for.
	 */
	FileNameS: "" | null;
	/**
	 * `VARCHAR(255) DEFAULT NULL`
	 */
	Title: string;
	/**
	 * `VARCHAR(255) DEFAULT NULL`
	 *
	 * references the artist, can be `NULL` (TODO: artist table reference with @ link)
	 */
	ArtistID: string | null;
	/**
	 * `VARCHAR(255) DEFAULT NULL`
	 */
	AlbumID: string | null;
	/**
	 * `VARCHAR(255) DEFAULT NULL`
	 */
	GenreID: string | null;
	/**
	 * `INTEGER DEFAULT NULL`
	 *
	 * `BPM * 100` for the two decimal places, i.e. value `15050` means `150.50` BPM.
	 * can be `0`, probably when BPM undetectable.
	 */
	BPM: number;
	/**
	 * `INTEGER DEFAULT NULL`
	 *
	 * length in seconds
	 */
	Length: number;
	/**
	 * `INTEGER DEFAULT NULL`
	 *
	 * i don't see any `NULL` so i'm pretty sure this defaults to `0` for tracks that don't have a track number in their ID3 tags.
	 */
	TrackNo: number;
	/**
	 * `INTEGER DEFAULT NULL`
	 *
	 * bitrate as an integer, e.g. `320`, can be `0`, maybe for VBR.
	 */
	BitRate: number;
	/**
	 * `INTEGER DEFAULT NULL`
	 *
	 * bit-depth as an integer, e.g. `16` or `24`
	 */
	BitDepth: number;
	/**
	 * `TEXT DEFAULT NULL`
	 *
	 * can be empty or `NULL` as well.
	 */
	Commnt: string | null;
	/**
	 * `INTEGER DEFAULT NULL`
	 *
	 * `0`: MP3, `4`: m4a, `11`: wav, `19`: soundcloud, TODO there are definitely a lot more :)
	 */
	FileType: number;
	/**
	 * `INTEGER DEFAULT NULL`
	 *
	 * defaults to `0`
	 */
	Rating: number;
	/**
	 * `INTEGER DEFAULT NULL`
	 *
	 * defaults to `0`, otherwise full year integer (`2022`)
	 */
	ReleaseYear: number;
	/**
	 * `VARCHAR(255) DEFAULT NULL`
	 *
	 * probably points to the artist table, but is most often `NULL`
	 */
	RemixerID: number | null;

	/**
	 * `VARCHAR(255) DEFAULT NULL`
	 */
	LabelID: any;
	/**
	 * `VARCHAR(255) DEFAULT NULL`
	 */
	OrgArtistID: any;
	/**
	 * `VARCHAR(255) DEFAULT NULL`
	 */
	KeyID: any;
	/**
	 * `VARCHAR(255) DEFAULT NULL`
	 */
	StockDate: any;
	/**
	 * `VARCHAR(255) DEFAULT NULL`
	 */
	ColorID: any;
	/**
	 * `INTEGER DEFAULT NULL`
	 */
	DJPlayCount: any;
	/**
	 * `VARCHAR(255) DEFAULT NULL`
	 */
	ImagePath: any;
	/**
	 * `VARCHAR(255) DEFAULT NULL`
	 */
	MasterDBID: any;
	/**
	 * `VARCHAR(255) DEFAULT NULL`
	 */
	MasterSongID: any;
	/**
	 * `VARCHAR(255) DEFAULT NULL`
	 */
	AnalysisDataPath: any;
	/**
	 * `VARCHAR(255) DEFAULT NULL`
	 */
	SearchStr: any;
	/**
	 * `INTEGER DEFAULT NULL`
	 */
	FileSize: any;
	/**
	 * `INTEGER DEFAULT NULL`
	 */
	DiscNo: any;
	/**
	 * `VARCHAR(255) DEFAULT NULL`
	 */
	ComposerID: any;
	/**
	 * `VARCHAR(255) DEFAULT NULL`
	 */
	Subtitle: any;
	/**
	 * `INTEGER DEFAULT NULL`
	 */
	SampleRate: any;
	/**
	 * `INTEGER DEFAULT NULL`
	 */
	DisableQuantize: any;
	/**
	 * `INTEGER DEFAULT NULL`
	 */
	Analysed: any;
	/**
	 * `VARCHAR(255) DEFAULT NULL`
	 */
	ReleaseDate: any;
	/**
	 * `VARCHAR(255) DEFAULT NULL`
	 */
	DateCreated: any;
	/**
	 * `INTEGER DEFAULT NULL`
	 */
	ContentLink: any;
	/**
	 * `VARCHAR(255) DEFAULT NULL`
	 */
	Tag: any;
	/**
	 * `VARCHAR(255) DEFAULT NULL`
	 */
	ModifiedByRBM: any;
	/**
	 * `VARCHAR(255) DEFAULT NULL`
	 */
	HotCueAutoLoad: any;
	/**
	 * `VARCHAR(255) DEFAULT NULL`
	 */
	DeliveryControl: any;
	/**
	 * `VARCHAR(255) DEFAULT NULL`
	 */
	DeliveryComment: any;
	/**
	 * `VARCHAR(255) DEFAULT NULL`
	 */
	CueUpdated: any;
	/**
	 * `VARCHAR(255) DEFAULT NULL`
	 */
	AnalysisUpdated: any;
	/**
	 * `VARCHAR(255) DEFAULT NULL`
	 */
	TrackInfoUpdated: any;
	/**
	 * `VARCHAR(255) DEFAULT NULL`
	 */
	Lyricist: any;
	/**
	 * `VARCHAR(255) DEFAULT NULL`
	 */
	ISRC: any;
	/**
	 * `INTEGER DEFAULT NULL`
	 */
	SamplerTrackInfo: any;
	/**
	 * `INTEGER DEFAULT NULL`
	 */
	SamplerPlayOffset: any;
	/**
	 * `FLOAT DEFAULT NULL`
	 */
	SamplerGain: any;
	/**
	 * `VARCHAR(255) DEFAULT NULL`
	 */
	VideoAssociate: any;
	/**
	 * `INTEGER DEFAULT NULL`
	 */
	LyricStatus: any;
	/**
	 * `INTEGER DEFAULT NULL`
	 */
	ServiceID: any;
	/**
	 * `VARCHAR(255) DEFAULT NULL`
	 */
	OrgFolderPath: any;
	/**
	 * `TEXT DEFAULT NULL`
	 */
	Reserved1: any;
	/**
	 * `TEXT DEFAULT NULL`
	 */
	Reserved2: any;
	/**
	 * `TEXT DEFAULT NULL`
	 */
	Reserved3: any;
	/**
	 * `TEXT DEFAULT NULL`
	 */
	Reserved4: any;
	/**
	 * `TEXT DEFAULT NULL`
	 */
	ExtInfo: any;
	/**
	 * `VARCHAR(255) DEFAULT NULL`
	 */
	rb_file_id: any;
	/**
	 * `VARCHAR(255) DEFAULT NULL`
	 */
	DeviceID: any;
	/**
	 * `VARCHAR(255) DEFAULT NULL`
	 */
	rb_LocalFolderPath: any;
	/**
	 * `VARCHAR(255) DEFAULT NULL`
	 */
	SrcID: any;
	/**
	 * `VARCHAR(255) DEFAULT NULL`
	 */
	SrcTitle: any;
	/**
	 * `VARCHAR(255) DEFAULT NULL`
	 */
	SrcArtistName: any;
	/**
	 * `VARCHAR(255) DEFAULT NULL`
	 */
	SrcAlbumName: any;
	/**
	 * `INTEGER DEFAULT NULL`
	 */
	SrcLength: any;
	/**
	 * `VARCHAR(255) DEFAULT NULL`
	 */
	UUID: any;
	/**
	 * `INTEGER DEFAULT 0`
	 */
	rb_data_status: any;
	/**
	 * `INTEGER DEFAULT 0`
	 */
	rb_local_data_status: any;
	/**
	 * `TINYINT(1) DEFAULT 0`
	 */
	rb_local_deleted: any;
	/**
	 * `TINYINT(1) DEFAULT 0`
	 */
	rb_local_synced: any;
	/**
	 * `BIGINT DEFAULT NULL`
	 */
	usn: any;
	/**
	 * `BIGINT DEFAULT NULL`
	 */
	rb_local_usn: any;
	/**
	 * `DATETIME NOT NULL`
	 */
	created_at: any;
	/**
	 * `DATETIME NOT NUL`
	 */
	updated_at: any;
}
