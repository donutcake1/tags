{if;{logic;!;{iscc}};{return;false}}
{set;~roles
	451248163760766988;
	451248172300369921;
	457535407085715476
}
{foreach;~role;~roles;
	{if;{userhasrole;{get;~role}};{void;{roleremove;{get;~role}}}}
}
{set;~big;b;big;big spoon}
{set;~small;small;small spoon}
{set;~switch;switch;switch spoon}
{switch;true;
	{bool;{lower;{get;~s}};includes;small};{void;{roleadd;451248163760766988}}{set;_{userid}spoon;Small Spoon};
	{bool;{lower;{get;~s}};includes;big};{void;{roleadd;451248172300369921}}{set;_{userid}spoon;Big Spoon};
	true;{void;{roleadd;457535407085715476}}{set;_{userid}spoon;Switch Spoon}
}