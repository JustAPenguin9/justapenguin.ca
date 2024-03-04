declare namespace Database {
	type Record = {
		id: number;
		winner: string;
		loser: string;
		recorded_at: Date;
		games_played: number;
		recorded_by: bigint;
	};
	type RecordWithDiscord = {
		id: number;
		winner: discord.User;
		loser: discord.User;
		recorded_at: Date;
		games_played: number;
		recorded_by: bigint;
	};
	type Move = {
		id: number;
		game: string;
		character: string;
		lables: string;
		data: {
			variations: MoveData[];
		};
	};
	type MoveData = {
		title: string;
		startup: string | number;
		active: string | number;
		recovery: string | number;
		damage: string | number;
		stun: string | number;
		attachment: string;
	};
}

declare namespace discord {
	/// https://cdn.discordapp.com/avatars/${User.id}/${user.avatar}.webp
	type User = {
		id: string;
		username: string; // unique @ username
		discriminator: string; // if its 0 they have a unique username
		global_name: string | null; // actual username
		avatar: string | null; // hash
		bot?: boolean;
		system?: boolean;
		mfa_enabled?: boolean;
		banner?: string | null;
		banner_color?: string;
		accent_color?: number | null;
		locale?: string;
		verified?: boolean;
		email?: string | null;
		flags?: number;
		premium_type?: number;
		public_flags?: number;
		avatar_decoration_data: any; // i dont know what this is
	};
}
