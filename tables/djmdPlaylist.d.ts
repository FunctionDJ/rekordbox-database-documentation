/** "Playlists" are both playlists and folders containing other playlists */
export interface djmdPlaylist {
	/**
	 * `VARCHAR(255)`
	 *
	 * series of ~8-9 digits, appear non-incrementing
	 */
	ID: string;
	/**
	 * `INTEGER DEFAULT NULL`
	 *
	 * position of the item amongst it's siblings, starting at 1
	 */
	Seq: number;
	/**
	 * `VARCHAR(255) DEFAULT NULL`
	 *
	 * self-explanatory
	 */
	Name: string;
	/**
	 * `VARCHAR(255) DEFAULT NULL`
	 *
	 * TODO unknown, maybe a future feature?
	 */
	ImagePath: string | null;
	/**
	 * `INTEGER DEFAULT NULL`
	 *
	 * `0`: regular playlist
	 * `1`: folder
	 * TODO there are probably more, like 2 for smart playlists
	 */
	Attribute: number;
	/**
	 * `VARCHAR(255) DEFAULT NULL` => {@link djmdPlaylist}
	 *
	 * self-explanatory, but can be the string `root` if no parent (not `NULL` despite being null-able)
	 */
	ParentID: string;
	/**
	 * `TEXT DEFAULT NULL`
	 *
	 * TODO probably contains the expression of the smart list, is `NULL` for folders and regular playlists
	 */
	SmartList: string | null;
	/**
	 * `VARCHAR(255) DEFAULT NULL`
	 *
	 * unique identifier for at least folders and regular playlists.
	 * appears to follow this shape `********-****-****-************` with `*` being a valid hexadecimal character (0-9, a-f)
	 */
	UUID: string;
	/**
	 * `INTEGER DEFAULT 0`
	 *
	 * TODO values `0` and `2` seen, no idea what they mean
	 */
	rb_data_status: number;
	/**
	 * `INTEGER DEFAULT 0`
	 *
	 * TODO only value 0 seen, maybe cloud sync related?
	 */
	rb_local_data_status: number;
	/**
	 * `TINYINT(1) DEFAULT 0`
	 *
	 * TODO related to deleted playlists. idk if it keeps all of them.
	 */
	rb_local_deleted: number;
	/**
	 * `TINYINT(1) DEFAULT 0`
	 *
	 * it appears that `0` means not synced with mobile devices and `1` means synced.
	 * new playlists will have `0` until synced. folders probably behave the same.
	 */
	rb_local_synced: number;
	/**
	 * `BIGINT DEFAULT NULL`
	 *
	 * TODO no idea. for me `NULL` everywhere. maybe cloud related? i don't have a subscription.
	 */
	usn: number | null;
	/**
	 * `BIGINT DEFAULT NULL`
	 *
	 * TODO no idea. for me `NULL` everywhere. maybe cloud related? i don't have a subscription.
	 */
	rb_local_usn: number;
	/**
	 * `DATETIME NOT NULL`
	 *
	 * self-explanatory.
	 */
	created_at: string;
	/**
	 * `DATETIME NOT NULL`
	 *
	 * self-explanatory.
	 */
	updated_at: string;
}
