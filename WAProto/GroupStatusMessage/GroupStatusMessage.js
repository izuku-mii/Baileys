/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.GroupStatusMessage = (function() {
    var GroupStatusMessage = {};

    GroupStatusMessage.FutureProofMessage = (function() {
        function FutureProofMessage(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        FutureProofMessage.prototype.groupStatusMessage = null;

        FutureProofMessage.create = function create(p) {
            return new FutureProofMessage(p);
        };

        FutureProofMessage.encode = function encode(m, w) {
            if (!w) w = $Writer.create();
            if (m.groupStatusMessage != null && Object.hasOwnProperty.call(m, "groupStatusMessage"))
                $root.GroupStatusMessage.GroupStatusMessage.encode(m.groupStatusMessage, w.uint32(10).fork()).ldelim();
            return w;
        };

        FutureProofMessage.decode = function decode(r, l) {
            if (!(r instanceof $Reader)) r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.GroupStatusMessage.FutureProofMessage();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.groupStatusMessage = $root.GroupStatusMessage.GroupStatusMessage.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        FutureProofMessage.fromObject = function fromObject(d) {
            if (d instanceof $root.GroupStatusMessage.FutureProofMessage) return d;
            var m = new $root.GroupStatusMessage.FutureProofMessage();
            if (d.groupStatusMessage != null) {
                if (typeof d.groupStatusMessage !== "object")
                    throw TypeError(".GroupStatusMessage.FutureProofMessage.groupStatusMessage: object expected");
                m.groupStatusMessage = $root.GroupStatusMessage.GroupStatusMessage.fromObject(d.groupStatusMessage);
            }
            return m;
        };

        FutureProofMessage.toObject = function toObject(m, o) {
            if (!o) o = {};
            var d = {};
            if (m.groupStatusMessage != null && m.hasOwnProperty("groupStatusMessage"))
                d.groupStatusMessage = $root.GroupStatusMessage.GroupStatusMessage.toObject(m.groupStatusMessage, o);
            return d;
        };

        FutureProofMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FutureProofMessage;
    })();

    GroupStatusMessage.GroupStatusMessage = (function() {
        function GroupStatusMessage(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GroupStatusMessage.prototype.statusType = null;
        GroupStatusMessage.prototype.statusText = null;
        GroupStatusMessage.prototype.timestamp = null;
        GroupStatusMessage.prototype.actionMetadata = null;
        GroupStatusMessage.prototype.memberInfo = null;
        GroupStatusMessage.prototype.settingsMetadata = null;

        GroupStatusMessage.create = function create(p) {
            return new GroupStatusMessage(p);
        };

        GroupStatusMessage.encode = function encode(m, w) {
            if (!w) w = $Writer.create();
            if (m.statusType != null && Object.hasOwnProperty.call(m, "statusType"))
                w.uint32(8).int32(m.statusType);
            if (m.statusText != null && Object.hasOwnProperty.call(m, "statusText"))
                w.uint32(18).string(m.statusText);
            if (m.timestamp != null && Object.hasOwnProperty.call(m, "timestamp"))
                w.uint32(24).uint64(m.timestamp);
            if (m.actionMetadata != null && Object.hasOwnProperty.call(m, "actionMetadata"))
                $root.GroupStatusMessage.GroupActionMetadata.encode(m.actionMetadata, w.uint32(34).fork()).ldelim();
            if (m.memberInfo != null && Object.hasOwnProperty.call(m, "memberInfo"))
                $root.GroupStatusMessage.GroupMemberInfo.encode(m.memberInfo, w.uint32(42).fork()).ldelim();
            if (m.settingsMetadata != null && Object.hasOwnProperty.call(m, "settingsMetadata"))
                $root.GroupStatusMessage.GroupSettingsMetadata.encode(m.settingsMetadata, w.uint32(50).fork()).ldelim();
            return w;
        };

        GroupStatusMessage.decode = function decode(r, l) {
            if (!(r instanceof $Reader)) r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.GroupStatusMessage.GroupStatusMessage();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.statusType = r.int32();
                    break;
                case 2:
                    m.statusText = r.string();
                    break;
                case 3:
                    m.timestamp = r.uint64();
                    break;
                case 4:
                    m.actionMetadata = $root.GroupStatusMessage.GroupActionMetadata.decode(r, r.uint32());
                    break;
                case 5:
                    m.memberInfo = $root.GroupStatusMessage.GroupMemberInfo.decode(r, r.uint32());
                    break;
                case 6:
                    m.settingsMetadata = $root.GroupStatusMessage.GroupSettingsMetadata.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        GroupStatusMessage.fromObject = function fromObject(d) {
            if (d instanceof $root.GroupStatusMessage.GroupStatusMessage) return d;
            var m = new $root.GroupStatusMessage.GroupStatusMessage();
            if (d.statusType != null) m.statusType = d.statusType;
            if (d.statusText != null) m.statusText = String(d.statusText);
            if (d.timestamp != null) {
                if ($util.Long)
                    (m.timestamp = $util.Long.fromValue(d.timestamp)).unsigned = true;
                else if (typeof d.timestamp === "string")
                    m.timestamp = parseInt(d.timestamp, 10);
                else if (typeof d.timestamp === "number")
                    m.timestamp = d.timestamp;
                else if (typeof d.timestamp === "object")
                    m.timestamp = new $util.LongBits(d.timestamp.low >>> 0, d.timestamp.high >>> 0).toNumber(true);
            }
            if (d.actionMetadata != null) {
                if (typeof d.actionMetadata !== "object")
                    throw TypeError(".GroupStatusMessage.GroupStatusMessage.actionMetadata: object expected");
                m.actionMetadata = $root.GroupStatusMessage.GroupActionMetadata.fromObject(d.actionMetadata);
            }
            if (d.memberInfo != null) {
                if (typeof d.memberInfo !== "object")
                    throw TypeError(".GroupStatusMessage.GroupStatusMessage.memberInfo: object expected");
                m.memberInfo = $root.GroupStatusMessage.GroupMemberInfo.fromObject(d.memberInfo);
            }
            if (d.settingsMetadata != null) {
                if (typeof d.settingsMetadata !== "object")
                    throw TypeError(".GroupStatusMessage.GroupStatusMessage.settingsMetadata: object expected");
                m.settingsMetadata = $root.GroupStatusMessage.GroupSettingsMetadata.fromObject(d.settingsMetadata);
            }
            return m;
        };

        GroupStatusMessage.toObject = function toObject(m, o) {
            if (!o) o = {};
            var d = {};
            if (m.statusType != null && m.hasOwnProperty("statusType"))
                d.statusType = m.statusType;
            if (m.statusText != null && m.hasOwnProperty("statusText"))
                d.statusText = m.statusText;
            if (m.timestamp != null && m.hasOwnProperty("timestamp"))
                d.timestamp = typeof m.timestamp === "number" ? m.timestamp : $util.Long.prototype.toString.call(m.timestamp);
            if (m.actionMetadata != null && m.hasOwnProperty("actionMetadata"))
                d.actionMetadata = $root.GroupStatusMessage.GroupActionMetadata.toObject(m.actionMetadata, o);
            if (m.memberInfo != null && m.hasOwnProperty("memberInfo"))
                d.memberInfo = $root.GroupStatusMessage.GroupMemberInfo.toObject(m.memberInfo, o);
            if (m.settingsMetadata != null && m.hasOwnProperty("settingsMetadata"))
                d.settingsMetadata = $root.GroupStatusMessage.GroupSettingsMetadata.toObject(m.settingsMetadata, o);
            return d;
        };

        GroupStatusMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GroupStatusMessage;
    })();

    GroupStatusMessage.GroupActionMetadata = (function() {
        function GroupActionMetadata(p) {
            this.targetJids = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GroupActionMetadata.prototype.actionType = null;
        GroupActionMetadata.prototype.actorJid = null;
        GroupActionMetadata.prototype.targetJids = $util.emptyArray;
        GroupActionMetadata.prototype.reason = null;

        GroupActionMetadata.create = function create(p) {
            return new GroupActionMetadata(p);
        };

        GroupActionMetadata.encode = function encode(m, w) {
            if (!w) w = $Writer.create();
            if (m.actionType != null && Object.hasOwnProperty.call(m, "actionType"))
                w.uint32(8).int32(m.actionType);
            if (m.actorJid != null && Object.hasOwnProperty.call(m, "actorJid"))
                w.uint32(18).string(m.actorJid);
            if (m.targetJids != null && m.targetJids.length)
                for (var i = 0; i < m.targetJids.length; ++i)
                    w.uint32(26).string(m.targetJids[i]);
            if (m.reason != null && Object.hasOwnProperty.call(m, "reason"))
                w.uint32(34).string(m.reason);
            return w;
        };

        GroupActionMetadata.decode = function decode(r, l) {
            if (!(r instanceof $Reader)) r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.GroupStatusMessage.GroupActionMetadata();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.actionType = r.int32();
                    break;
                case 2:
                    m.actorJid = r.string();
                    break;
                case 3:
                    if (!(m.targetJids && m.targetJids.length))
                        m.targetJids = [];
                    m.targetJids.push(r.string());
                    break;
                case 4:
                    m.reason = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        GroupActionMetadata.fromObject = function fromObject(d) {
            if (d instanceof $root.GroupStatusMessage.GroupActionMetadata) return d;
            var m = new $root.GroupStatusMessage.GroupActionMetadata();
            if (d.actionType != null) m.actionType = d.actionType;
            if (d.actorJid != null) m.actorJid = String(d.actorJid);
            if (d.targetJids) {
                if (!Array.isArray(d.targetJids))
                    throw TypeError(".GroupStatusMessage.GroupActionMetadata.targetJids: array expected");
                m.targetJids = [];
                for (var i = 0; i < d.targetJids.length; ++i)
                    m.targetJids[i] = String(d.targetJids[i]);
            }
            if (d.reason != null) m.reason = String(d.reason);
            return m;
        };

        GroupActionMetadata.toObject = function toObject(m, o) {
            if (!o) o = {};
            var d = {};
            if (o.arrays || o.defaults) d.targetJids = [];
            if (m.actionType != null && m.hasOwnProperty("actionType"))
                d.actionType = m.actionType;
            if (m.actorJid != null && m.hasOwnProperty("actorJid"))
                d.actorJid = m.actorJid;
            if (m.targetJids && m.targetJids.length) {
                d.targetJids = [];
                for (var j = 0; j < m.targetJids.length; ++j)
                    d.targetJids[j] = m.targetJids[j];
            }
            if (m.reason != null && m.hasOwnProperty("reason"))
                d.reason = m.reason;
            return d;
        };

        GroupActionMetadata.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GroupActionMetadata;
    })();

    GroupStatusMessage.GroupMemberInfo = (function() {
        function GroupMemberInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GroupMemberInfo.prototype.jid = null;
        GroupMemberInfo.prototype.displayName = null;
        GroupMemberInfo.prototype.role = null;

        GroupMemberInfo.create = function create(p) {
            return new GroupMemberInfo(p);
        };

        GroupMemberInfo.encode = function encode(m, w) {
            if (!w) w = $Writer.create();
            if (m.jid != null && Object.hasOwnProperty.call(m, "jid"))
                w.uint32(10).string(m.jid);
            if (m.displayName != null && Object.hasOwnProperty.call(m, "displayName"))
                w.uint32(18).string(m.displayName);
            if (m.role != null && Object.hasOwnProperty.call(m, "role"))
                w.uint32(24).int32(m.role);
            return w;
        };

        GroupMemberInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader)) r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.GroupStatusMessage.GroupMemberInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.jid = r.string();
                    break;
                case 2:
                    m.displayName = r.string();
                    break;
                case 3:
                    m.role = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        GroupMemberInfo.fromObject = function fromObject(d) {
            if (d instanceof $root.GroupStatusMessage.GroupMemberInfo) return d;
            var m = new $root.GroupStatusMessage.GroupMemberInfo();
            if (d.jid != null) m.jid = String(d.jid);
            if (d.displayName != null) m.displayName = String(d.displayName);
            if (d.role != null) m.role = d.role;
            return m;
        };

        GroupMemberInfo.toObject = function toObject(m, o) {
            if (!o) o = {};
            var d = {};
            if (m.jid != null && m.hasOwnProperty("jid"))
                d.jid = m.jid;
            if (m.displayName != null && m.hasOwnProperty("displayName"))
                d.displayName = m.displayName;
            if (m.role != null && m.hasOwnProperty("role"))
                d.role = m.role;
            return d;
        };

        GroupMemberInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GroupMemberInfo;
    })();

    GroupStatusMessage.GroupSettingsMetadata = (function() {
        function GroupSettingsMetadata(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GroupSettingsMetadata.prototype.editGroupInfoRestricted = null;
        GroupSettingsMetadata.prototype.sendMessagesRestricted = null;
        GroupSettingsMetadata.prototype.disappearingMessagesEnabled = null;
        GroupSettingsMetadata.prototype.disappearingMessagesDuration = null;

        GroupSettingsMetadata.create = function create(p) {
            return new GroupSettingsMetadata(p);
        };

        GroupSettingsMetadata.encode = function encode(m, w) {
            if (!w) w = $Writer.create();
            if (m.editGroupInfoRestricted != null && Object.hasOwnProperty.call(m, "editGroupInfoRestricted"))
                w.uint32(8).bool(m.editGroupInfoRestricted);
            if (m.sendMessagesRestricted != null && Object.hasOwnProperty.call(m, "sendMessagesRestricted"))
                w.uint32(16).bool(m.sendMessagesRestricted);
            if (m.disappearingMessagesEnabled != null && Object.hasOwnProperty.call(m, "disappearingMessagesEnabled"))
                w.uint32(24).bool(m.disappearingMessagesEnabled);
            if (m.disappearingMessagesDuration != null && Object.hasOwnProperty.call(m, "disappearingMessagesDuration"))
                w.uint32(32).uint32(m.disappearingMessagesDuration);
            return w;
        };

        GroupSettingsMetadata.decode = function decode(r, l) {
            if (!(r instanceof $Reader)) r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.GroupStatusMessage.GroupSettingsMetadata();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.editGroupInfoRestricted = r.bool();
                    break;
                case 2:
                    m.sendMessagesRestricted = r.bool();
                    break;
                case 3:
                    m.disappearingMessagesEnabled = r.bool();
                    break;
                case 4:
                    m.disappearingMessagesDuration = r.uint32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        GroupSettingsMetadata.fromObject = function fromObject(d) {
            if (d instanceof $root.GroupStatusMessage.GroupSettingsMetadata) return d;
            var m = new $root.GroupStatusMessage.GroupSettingsMetadata();
            if (d.editGroupInfoRestricted != null)
                m.editGroupInfoRestricted = Boolean(d.editGroupInfoRestricted);
            if (d.sendMessagesRestricted != null)
                m.sendMessagesRestricted = Boolean(d.sendMessagesRestricted);
            if (d.disappearingMessagesEnabled != null)
                m.disappearingMessagesEnabled = Boolean(d.disappearingMessagesEnabled);
            if (d.disappearingMessagesDuration != null)
                m.disappearingMessagesDuration = d.disappearingMessagesDuration >>> 0;
            return m;
        };

        GroupSettingsMetadata.toObject = function toObject(m, o) {
            if (!o) o = {};
            var d = {};
            if (m.editGroupInfoRestricted != null && m.hasOwnProperty("editGroupInfoRestricted"))
                d.editGroupInfoRestricted = m.editGroupInfoRestricted;
            if (m.sendMessagesRestricted != null && m.hasOwnProperty("sendMessagesRestricted"))
                d.sendMessagesRestricted = m.sendMessagesRestricted;
            if (m.disappearingMessagesEnabled != null && m.hasOwnProperty("disappearingMessagesEnabled"))
                d.disappearingMessagesEnabled = m.disappearingMessagesEnabled;
            if (m.disappearingMessagesDuration != null && m.hasOwnProperty("disappearingMessagesDuration"))
                d.disappearingMessagesDuration = m.disappearingMessagesDuration;
            return d;
        };

        GroupSettingsMetadata.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GroupSettingsMetadata;
    })();

    return GroupStatusMessage;
})();

module.exports = $root;
