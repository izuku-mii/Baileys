import * as $protobuf from "protobufjs";
import Long = require("long");

export namespace GroupStatusMessage {

    interface IFutureProofMessage {
        groupStatusMessage?: (GroupStatusMessage.IGroupStatusMessage|null);
    }

    class FutureProofMessage implements IFutureProofMessage {
        constructor(properties?: GroupStatusMessage.IFutureProofMessage);
        public groupStatusMessage?: (GroupStatusMessage.IGroupStatusMessage|null);
        public static create(properties?: GroupStatusMessage.IFutureProofMessage): GroupStatusMessage.FutureProofMessage;
        public static encode(message: GroupStatusMessage.IFutureProofMessage, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GroupStatusMessage.FutureProofMessage;
        public static fromObject(object: { [k: string]: any }): GroupStatusMessage.FutureProofMessage;
        public static toObject(message: GroupStatusMessage.FutureProofMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IGroupStatusMessage {
        statusType?: (GroupStatusMessage.StatusType|null);
        statusText?: (string|null);
        timestamp?: (number|Long|null);
        actionMetadata?: (GroupStatusMessage.IGroupActionMetadata|null);
        memberInfo?: (GroupStatusMessage.IGroupMemberInfo|null);
        settingsMetadata?: (GroupStatusMessage.IGroupSettingsMetadata|null);
    }

    class GroupStatusMessage implements IGroupStatusMessage {
        constructor(properties?: GroupStatusMessage.IGroupStatusMessage);
        public statusType?: (GroupStatusMessage.StatusType|null);
        public statusText?: (string|null);
        public timestamp?: (number|Long|null);
        public actionMetadata?: (GroupStatusMessage.IGroupActionMetadata|null);
        public memberInfo?: (GroupStatusMessage.IGroupMemberInfo|null);
        public settingsMetadata?: (GroupStatusMessage.IGroupSettingsMetadata|null);
        public static create(properties?: GroupStatusMessage.IGroupStatusMessage): GroupStatusMessage.GroupStatusMessage;
        public static encode(message: GroupStatusMessage.IGroupStatusMessage, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GroupStatusMessage.GroupStatusMessage;
        public static fromObject(object: { [k: string]: any }): GroupStatusMessage.GroupStatusMessage;
        public static toObject(message: GroupStatusMessage.GroupStatusMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IGroupActionMetadata {
        actionType?: (GroupStatusMessage.GroupActionMetadata.GroupActionType|null);
        actorJid?: (string|null);
        targetJids?: (string[]|null);
        reason?: (string|null);
    }

    class GroupActionMetadata implements IGroupActionMetadata {
        constructor(properties?: GroupStatusMessage.IGroupActionMetadata);
        public actionType?: (GroupStatusMessage.GroupActionMetadata.GroupActionType|null);
        public actorJid?: (string|null);
        public targetJids: string[];
        public reason?: (string|null);
        public static create(properties?: GroupStatusMessage.IGroupActionMetadata): GroupStatusMessage.GroupActionMetadata;
        public static encode(message: GroupStatusMessage.IGroupActionMetadata, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GroupStatusMessage.GroupActionMetadata;
        public static fromObject(object: { [k: string]: any }): GroupStatusMessage.GroupActionMetadata;
        public static toObject(message: GroupStatusMessage.GroupActionMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    namespace GroupActionMetadata {
        enum GroupActionType {
            UNKNOWN = 0,
            MEMBER_ADD = 1,
            MEMBER_REMOVE = 2,
            MEMBER_PROMOTE = 3,
            MEMBER_DEMOTE = 4,
            GROUP_CREATE = 5,
            GROUP_SUBJECT_CHANGE = 6,
            GROUP_ICON_CHANGE = 7,
            GROUP_DESCRIPTION_CHANGE = 8
        }
    }

    interface IGroupMemberInfo {
        jid?: (string|null);
        displayName?: (string|null);
        role?: (GroupStatusMessage.GroupMemberInfo.MemberRole|null);
    }

    class GroupMemberInfo implements IGroupMemberInfo {
        constructor(properties?: GroupStatusMessage.IGroupMemberInfo);
        public jid?: (string|null);
        public displayName?: (string|null);
        public role?: (GroupStatusMessage.GroupMemberInfo.MemberRole|null);
        public static create(properties?: GroupStatusMessage.IGroupMemberInfo): GroupStatusMessage.GroupMemberInfo;
        public static encode(message: GroupStatusMessage.IGroupMemberInfo, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GroupStatusMessage.GroupMemberInfo;
        public static fromObject(object: { [k: string]: any }): GroupStatusMessage.GroupMemberInfo;
        public static toObject(message: GroupStatusMessage.GroupMemberInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    namespace GroupMemberInfo {
        enum MemberRole {
            MEMBER = 0,
            ADMIN = 1,
            SUPER_ADMIN = 2
        }
    }

    interface IGroupSettingsMetadata {
        editGroupInfoRestricted?: (boolean|null);
        sendMessagesRestricted?: (boolean|null);
        disappearingMessagesEnabled?: (boolean|null);
        disappearingMessagesDuration?: (number|null);
    }

    class GroupSettingsMetadata implements IGroupSettingsMetadata {
        constructor(properties?: GroupStatusMessage.IGroupSettingsMetadata);
        public editGroupInfoRestricted?: (boolean|null);
        public sendMessagesRestricted?: (boolean|null);
        public disappearingMessagesEnabled?: (boolean|null);
        public disappearingMessagesDuration?: (number|null);
        public static create(properties?: GroupStatusMessage.IGroupSettingsMetadata): GroupStatusMessage.GroupSettingsMetadata;
        public static encode(message: GroupStatusMessage.IGroupSettingsMetadata, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GroupStatusMessage.GroupSettingsMetadata;
        public static fromObject(object: { [k: string]: any }): GroupStatusMessage.GroupSettingsMetadata;
        public static toObject(message: GroupStatusMessage.GroupSettingsMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    enum StatusType {
        GENERAL = 0,
        MEMBER_ACTION = 1,
        SETTINGS_CHANGE = 2,
        SYSTEM_MESSAGE = 3
    }
}
