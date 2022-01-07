var CONSTANT_Undefined          = 0x00;
var CONSTANT_Utf8               = 0x01;
var CONSTANT_Float              = 0x02; // May be deprecated ??
var CONSTANT_Int                = 0x03;
var CONSTANT_UInt               = 0x04;
var CONSTANT_PrivateNs          = 0x05;
var CONSTANT_Double             = 0x06;
var CONSTANT_QName              = 0x07; // ns::name, const ns, const name
var CONSTANT_Namespace          = 0x08;
var CONSTANT_Multiname          = 0x09; // [ns...]::name, const [ns...], const name
var CONSTANT_False              = 0x0A;
var CONSTANT_True               = 0x0B;
var CONSTANT_Null               = 0x0C;
var CONSTANT_QNameA             = 0x0D; // @ns::name, const ns, const name
var CONSTANT_MultinameA         = 0x0E; // @[ns...]::name, const [ns...], const name
var CONSTANT_RTQName            = 0x0F; // ns::name, var ns, const name
var CONSTANT_RTQNameA           = 0x10; // @ns::name, var ns, const name
var CONSTANT_RTQNameL           = 0x11; // ns::[name], var ns, var name
var CONSTANT_RTQNameLA          = 0x12; // @ns::[name], var ns, var name
var CONSTANT_NameL              = 0x13; // o[name], var name
var CONSTANT_NameLA             = 0x14; // @[name], var name
var CONSTANT_NamespaceSet       = 0x15;
var CONSTANT_PackageNamespace   = 0x16; // namespace for a package
var CONSTANT_PackageInternalNs  = 0x17;
var CONSTANT_ProtectedNamespace = 0x18;
var CONSTANT_ExplicitNamespace  = 0x19;
var CONSTANT_StaticProtectedNs  = 0x1A;
var CONSTANT_MultinameL         = 0x1B;
var CONSTANT_MultinameLA        = 0x1C;
var CONSTANT_TypeName           = 0x1D;

var CONSTANT_ClassSealed        = 0x01;
var CONSTANT_ClassFinal         = 0x02;
var CONSTANT_ClassInterface     = 0x04;
var CONSTANT_ClassProtectedNs   = 0x08;

var TRAIT_Slot                  = 0;
var TRAIT_Method                = 1;
var TRAIT_Getter                = 2;
var TRAIT_Setter                = 3;
var TRAIT_Class                 = 4;
var TRAIT_Function              = 5;
var TRAIT_Const                 = 6;

var ATTR_Final                  = 0x01;
var ATTR_Override               = 0x02;
var ATTR_Metadata               = 0x04;

var SLOT_var                    = 0;
var SLOT_method                 = 1;
var SLOT_getter                 = 2;
var SLOT_setter                 = 3;
var SLOT_class                  = 4;
var SLOT_function               = 6;

var METHOD_Arguments            = 0x1;
var METHOD_Activation           = 0x2;
var METHOD_Needrest             = 0x4;
var METHOD_HasOptional          = 0x8;
var METHOD_IgnoreRest           = 0x10;
var METHOD_Native               = 0x20;
var METHOD_Setsdxns             = 0x40;
var METHOD_HasParamNames        = 0x80;

var OP_bkpt = 0x01;
var OP_nop = 0x02;
var OP_throw = 0x03;
var OP_getsuper = 0x04;
var OP_setsuper = 0x05;
var OP_dxns = 0x06;
var OP_dxnslate = 0x07;
var OP_kill = 0x08;
var OP_label = 0x09;
var OP_lf32x4 = 0x0A;
var OP_sf32x4 = 0x0B;
var OP_ifnlt = 0x0C;
var OP_ifnle = 0x0D;
var OP_ifngt = 0x0E;
var OP_ifnge = 0x0F;
var OP_jump = 0x10;
var OP_iftrue = 0x11;
var OP_iffalse = 0x12;
var OP_ifeq = 0x13;
var OP_ifne = 0x14;
var OP_iflt = 0x15;
var OP_ifle = 0x16;
var OP_ifgt = 0x17;
var OP_ifge = 0x18;
var OP_ifstricteq = 0x19;
var OP_ifstrictne = 0x1A;
var OP_lookupswitch = 0x1B;
var OP_pushwith = 0x1C;
var OP_popscope = 0x1D;
var OP_nextname = 0x1E;
var OP_hasnext = 0x1F;
var OP_pushnull = 0x20;
var OP_pushundefined = 0x21;
var OP_pushfloat = 0x22;
var OP_nextvalue = 0x23;
var OP_pushbyte = 0x24;
var OP_pushshort = 0x25;
var OP_pushtrue = 0x26;
var OP_pushfalse = 0x27;
var OP_pushnan = 0x28;
var OP_pop = 0x29;
var OP_dup = 0x2A;
var OP_swap = 0x2B;
var OP_pushstring = 0x2C;
var OP_pushint = 0x2D;
var OP_pushuint = 0x2E;
var OP_pushdouble = 0x2F;
var OP_pushscope = 0x30;
var OP_pushnamespace = 0x31;
var OP_hasnext2 = 0x32;
var OP_li8 = 0x35;
var OP_li16 = 0x36;
var OP_li32 = 0x37;
var OP_lf32 = 0x38;
var OP_lf64 = 0x39;
var OP_si8 = 0x3A;
var OP_si16 = 0x3B;
var OP_si32 = 0x3C;
var OP_sf32 = 0x3D;
var OP_sf64 = 0x3E;
var OP_newfunction = 0x40;
var OP_call = 0x41;
var OP_construct = 0x42;
var OP_callmethod = 0x43;
var OP_callstatic = 0x44;
var OP_callsuper = 0x45;
var OP_callproperty = 0x46;
var OP_returnvoid = 0x47;
var OP_returnvalue = 0x48;
var OP_constructsuper = 0x49;
var OP_constructprop = 0x4A;
var OP_callsuperid = 0x4B;
var OP_callproplex = 0x4C;
var OP_callinterface = 0x4D;
var OP_callsupervoid = 0x4E;
var OP_callpropvoid = 0x4F;
var OP_sxi1 = 0x50;
var OP_sxi8 = 0x51;
var OP_sxi16 = 0x52;
var OP_applytype = 0x53;
var OP_pushfloat4 = 0x54;
var OP_newobject = 0x55;
var OP_newarray = 0x56;
var OP_newactivation = 0x57;
var OP_newclass = 0x58;
var OP_getdescendants = 0x59;
var OP_newcatch = 0x5A;
var OP_findpropstrict = 0x5D;
var OP_findproperty = 0x5E;
var OP_finddef = 0x5F;
var OP_getlex = 0x60;
var OP_setproperty = 0x61;
var OP_getlocal = 0x62;
var OP_setlocal = 0x63;
var OP_getglobalscope = 0x64;
var OP_getscopeobject = 0x65;
var OP_getproperty = 0x66;
var OP_getouterscope = 0x67;
var OP_initproperty = 0x68;
var OP_setpropertylate = 0x69;
var OP_deleteproperty = 0x6A;
var OP_deletepropertylate = 0x6B;
var OP_getslot = 0x6C;
var OP_setslot = 0x6D;
var OP_getglobalslot = 0x6E;
var OP_setglobalslot = 0x6F;
var OP_convert_s = 0x70;
var OP_esc_xelem = 0x71;
var OP_esc_xattr = 0x72;
var OP_convert_i = 0x73;
var OP_convert_u = 0x74;
var OP_convert_d = 0x75;
var OP_convert_b = 0x76;
var OP_convert_o = 0x77;
var OP_checkfilter = 0x78;
var OP_convert_f = 0x79;
var OP_unplus = 0x7a;
var OP_convert_f4 = 0x7b;
var OP_coerce = 0x80;
var OP_coerce_b = 0x81;
var OP_coerce_a = 0x82;
var OP_coerce_i = 0x83;
var OP_coerce_d = 0x84;
var OP_coerce_s = 0x85;
var OP_astype = 0x86;
var OP_astypelate = 0x87;
var OP_coerce_u = 0x88;
var OP_coerce_o = 0x89;
var OP_negate = 0x90;
var OP_increment = 0x91;
var OP_inclocal = 0x92;
var OP_decrement = 0x93;
var OP_declocal = 0x94;
var OP_typeof = 0x95;
var OP_not = 0x96;
var OP_bitnot = 0x97;
var OP_add = 0xA0;
var OP_subtract = 0xA1;
var OP_multiply = 0xA2;
var OP_divide = 0xA3;
var OP_modulo = 0xA4;
var OP_lshift = 0xA5;
var OP_rshift = 0xA6;
var OP_urshift = 0xA7;
var OP_bitand = 0xA8;
var OP_bitor = 0xA9;
var OP_bitxor = 0xAA;
var OP_equals = 0xAB;
var OP_strictequals = 0xAC;
var OP_lessthan = 0xAD;
var OP_lessequals = 0xAE;
var OP_greaterthan = 0xAF;
var OP_greaterequals = 0xB0;
var OP_instanceof = 0xB1;
var OP_istype = 0xB2;
var OP_istypelate = 0xB3;
var OP_in = 0xB4;
var OP_increment_i = 0xC0;
var OP_decrement_i = 0xC1;
var OP_inclocal_i = 0xC2;
var OP_declocal_i = 0xC3;
var OP_negate_i = 0xC4;
var OP_add_i = 0xC5;
var OP_subtract_i = 0xC6;
var OP_multiply_i = 0xC7;
var OP_getlocal0 = 0xD0;
var OP_getlocal1 = 0xD1;
var OP_getlocal2 = 0xD2;
var OP_getlocal3 = 0xD3;
var OP_setlocal0 = 0xD4;
var OP_setlocal1 = 0xD5;
var OP_setlocal2 = 0xD6;
var OP_setlocal3 = 0xD7;
var OP_invalid = 0xED;
var OP_debug = 0xEF;
var OP_debugline = 0xF0;
var OP_debugfile = 0xF1;
var OP_bkptline = 0xF2;
var OP_timestamp = 0xF3;

var INT_MIN_VALUE = -0x80000000;
var INT_MAX_VALUE = 0x7fffffff;
var UINT_MIN_VALUE = 0;
var UINT_MAX_VALUE = 0xffffffff;