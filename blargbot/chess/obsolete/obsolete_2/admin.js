t!t edit admin {aset;{userid;{args;0}}admin;{if;==;super;{lower;{args;1}};{aget;{userid;{args;0}}admin};{if;==;{userid;{args;0}};{aget;kao};1;{if;!=;1;{aget;{userid}admin};{aget;{userid;{args;0}}admin};{if;==;{aget;{userid;{args;0}}opadmin};1;{aget;{userid;{args;0}}admin};{if;!=;{aget;{userid;{args;0}}admin};1;1;{if;==;{userid};{aget;kao};0;{if;==;1;{aget;{userid}opadmin};1;0;{aget;{userid;{args;0}}admin}}}}}}}}}{aset;{userid;{args;0}}opadmin;{if;!=;super;{lower;{args;1}};{aget;{userid;{args;0}}opadmin};{if;==;{userid};{aget;kao};{if;!=;{aget;{userid;{args;0}}opadmin};1;1;0};{if;==;{aget;{userid}opadmin};1;{if;!=;{aget;{userid;{args;0}}opadmin};1;1;0};{aget;{userid;{args;0}}opadmin}}}}}{aset;{userid;{args;0}}admin;{if;==;{aget;{userid;{args;0}}opadmin};1;1;{aget;{userid;{args;0}}admin}}}{if;==;1;{aget;{userid}admin};{if;==;;{args;0};:x: | **{username}**, you must provide a user.;{if;==;{username;{args;0}};`User not found`;🔍 | **{username}**, the user could not be found.;{if;==;{userid;{args;0}};{aget;kao};:x: | You cannot remove this person's power!;{if;==;{aget;{userid;{args;0}}opadmin};1;{if;==;{userid};{aget;kao};🆗 | {username;{args;0}} is {if;==;1;{aget;{userid;{args;0}}{if;==;super;{lower;{args;1}};op}admin};added to;removed from} `{if;==;super;{lower;{args;1}};Op}Admin`.;:x: | This user is an OpAdmin and you cannot change their status!};{if;==;{aget;{userid}opadmin};1;🆗 | {username;{args;0}} is {if;==;1;{aget;{userid;{args;0}}{if;==;super;{lower;{args;1}};op}admin};added to;removed from} `{if;==;super;{lower;{args;1}};Op}Admin`.;:x: | You are of the same level and you can't remove this person's Admin ability.}}}}};**:x: | You do not have enough permissions to access management console.**}