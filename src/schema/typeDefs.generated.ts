import type { DocumentNode } from "graphql";
export const typeDefs = {
  kind: "Document",
  definitions: [
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 5, end: 10 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 0, end: 10 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PayloadError",
        loc: { start: 17, end: 29 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "error", loc: { start: 34, end: 39 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "PayloadErrorType",
                loc: { start: 41, end: 57 },
              },
              loc: { start: 41, end: 57 },
            },
            loc: { start: 41, end: 58 },
          },
          directives: [],
          loc: { start: 34, end: 58 },
        },
      ],
      loc: { start: 12, end: 60 },
    },
    {
      kind: "EnumTypeDefinition",
      name: {
        kind: "Name",
        value: "PayloadErrorType",
        loc: { start: 67, end: 83 },
      },
      directives: [],
      values: [
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "NOT_FOUND",
            loc: { start: 88, end: 97 },
          },
          directives: [],
          loc: { start: 88, end: 97 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "INPUT_VALIDATION_ERROR",
            loc: { start: 100, end: 122 },
          },
          directives: [],
          loc: { start: 100, end: 122 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "FORBIDDEN_ERROR",
            loc: { start: 125, end: 140 },
          },
          directives: [],
          loc: { start: 125, end: 140 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "UNEXPECTED_ERROR",
            loc: { start: 143, end: 159 },
          },
          directives: [],
          loc: { start: 143, end: 159 },
        },
      ],
      loc: { start: 62, end: 161 },
    },
    {
      kind: "ScalarTypeDefinition",
      name: { kind: "Name", value: "DateTime", loc: { start: 170, end: 178 } },
      directives: [],
      loc: { start: 163, end: 178 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 191, end: 196 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "book", loc: { start: 201, end: 205 } },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 206, end: 208 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 210, end: 212 },
                  },
                  loc: { start: 210, end: 212 },
                },
                loc: { start: 210, end: 213 },
              },
              directives: [],
              loc: { start: 206, end: 213 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "BookPayload",
                loc: { start: 216, end: 227 },
              },
              loc: { start: 216, end: 227 },
            },
            loc: { start: 216, end: 228 },
          },
          directives: [],
          loc: { start: 201, end: 228 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "readable",
            loc: { start: 231, end: 239 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 240, end: 242 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 244, end: 246 },
                  },
                  loc: { start: 244, end: 246 },
                },
                loc: { start: 244, end: 247 },
              },
              directives: [],
              loc: { start: 240, end: 247 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Readable",
              loc: { start: 250, end: 258 },
            },
            loc: { start: 250, end: 258 },
          },
          directives: [],
          loc: { start: 231, end: 258 },
        },
      ],
      loc: { start: 179, end: 260 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Book", loc: { start: 267, end: 271 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 276, end: 278 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 280, end: 282 },
              },
              loc: { start: 280, end: 282 },
            },
            loc: { start: 280, end: 283 },
          },
          directives: [],
          loc: { start: 276, end: 283 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "isbn", loc: { start: 286, end: 290 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 292, end: 298 },
              },
              loc: { start: 292, end: 298 },
            },
            loc: { start: 292, end: 299 },
          },
          directives: [],
          loc: { start: 286, end: 299 },
        },
      ],
      loc: { start: 262, end: 301 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "BookResult",
        loc: { start: 308, end: 318 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "result",
            loc: { start: 323, end: 329 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Book",
              loc: { start: 331, end: 335 },
            },
            loc: { start: 331, end: 335 },
          },
          directives: [],
          loc: { start: 323, end: 335 },
        },
      ],
      loc: { start: 303, end: 337 },
    },
    {
      kind: "UnionTypeDefinition",
      name: {
        kind: "Name",
        value: "BookPayload",
        loc: { start: 345, end: 356 },
      },
      directives: [],
      types: [
        {
          kind: "NamedType",
          name: {
            kind: "Name",
            value: "BookResult",
            loc: { start: 359, end: 369 },
          },
          loc: { start: 359, end: 369 },
        },
        {
          kind: "NamedType",
          name: {
            kind: "Name",
            value: "PayloadError",
            loc: { start: 372, end: 384 },
          },
          loc: { start: 372, end: 384 },
        },
      ],
      loc: { start: 339, end: 384 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ShortNovel",
        loc: { start: 391, end: 401 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 406, end: 408 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 410, end: 412 },
              },
              loc: { start: 410, end: 412 },
            },
            loc: { start: 410, end: 413 },
          },
          directives: [],
          loc: { start: 406, end: 413 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "summary",
            loc: { start: 416, end: 423 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 425, end: 431 },
              },
              loc: { start: 425, end: 431 },
            },
            loc: { start: 425, end: 432 },
          },
          directives: [],
          loc: { start: 416, end: 432 },
        },
      ],
      loc: { start: 386, end: 434 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Magazine", loc: { start: 441, end: 449 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 454, end: 456 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 458, end: 460 },
              },
              loc: { start: 458, end: 460 },
            },
            loc: { start: 458, end: 461 },
          },
          directives: [],
          loc: { start: 454, end: 461 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "issueNumber",
            loc: { start: 464, end: 475 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 477, end: 480 },
              },
              loc: { start: 477, end: 480 },
            },
            loc: { start: 477, end: 481 },
          },
          directives: [],
          loc: { start: 464, end: 481 },
        },
      ],
      loc: { start: 436, end: 483 },
    },
    {
      kind: "UnionTypeDefinition",
      name: { kind: "Name", value: "Readable", loc: { start: 491, end: 499 } },
      directives: [],
      types: [
        {
          kind: "NamedType",
          name: {
            kind: "Name",
            value: "ShortNovel",
            loc: { start: 502, end: 512 },
          },
          loc: { start: 502, end: 512 },
        },
        {
          kind: "NamedType",
          name: {
            kind: "Name",
            value: "Magazine",
            loc: { start: 515, end: 523 },
          },
          loc: { start: 515, end: 523 },
        },
      ],
      loc: { start: 485, end: 523 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 536, end: 541 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "character",
            loc: { start: 546, end: 555 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 556, end: 558 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 560, end: 562 },
                  },
                  loc: { start: 560, end: 562 },
                },
                loc: { start: 560, end: 563 },
              },
              directives: [],
              loc: { start: 556, end: 563 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "CharacterNode",
              loc: { start: 566, end: 579 },
            },
            loc: { start: 566, end: 579 },
          },
          directives: [],
          loc: { start: 546, end: 579 },
        },
      ],
      loc: { start: 524, end: 581 },
    },
    {
      kind: "InterfaceTypeDefinition",
      name: {
        kind: "Name",
        value: "CharacterNode",
        loc: { start: 593, end: 606 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 611, end: 613 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 615, end: 617 },
              },
              loc: { start: 615, end: 617 },
            },
            loc: { start: 615, end: 618 },
          },
          directives: [],
          loc: { start: 611, end: 618 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "mostRelatedCharacter",
            loc: { start: 621, end: 641 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "CharacterNode",
              loc: { start: 643, end: 656 },
            },
            loc: { start: 643, end: 656 },
          },
          directives: [],
          loc: { start: 621, end: 656 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "relatedCharacters",
            loc: { start: 659, end: 676 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "CharacterNode",
                    loc: { start: 679, end: 692 },
                  },
                  loc: { start: 679, end: 692 },
                },
                loc: { start: 679, end: 693 },
              },
              loc: { start: 678, end: 694 },
            },
            loc: { start: 678, end: 695 },
          },
          directives: [],
          loc: { start: 659, end: 695 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "lastAppearsIn",
            loc: { start: 698, end: 711 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Readable",
              loc: { start: 713, end: 721 },
            },
            loc: { start: 713, end: 721 },
          },
          directives: [],
          loc: { start: 698, end: 721 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "appearsIn",
            loc: { start: 724, end: 733 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Readable",
                    loc: { start: 736, end: 744 },
                  },
                  loc: { start: 736, end: 744 },
                },
                loc: { start: 736, end: 745 },
              },
              loc: { start: 735, end: 746 },
            },
            loc: { start: 735, end: 747 },
          },
          directives: [],
          loc: { start: 724, end: 747 },
        },
      ],
      loc: { start: 583, end: 749 },
    },
    {
      kind: "InterfaceTypeDefinition",
      name: {
        kind: "Name",
        value: "MainCharacter",
        loc: { start: 761, end: 774 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "screenName",
            loc: { start: 779, end: 789 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 791, end: 797 },
              },
              loc: { start: 791, end: 797 },
            },
            loc: { start: 791, end: 798 },
          },
          directives: [],
          loc: { start: 779, end: 798 },
        },
      ],
      loc: { start: 751, end: 800 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Wizard", loc: { start: 807, end: 813 } },
      interfaces: [
        {
          kind: "NamedType",
          name: {
            kind: "Name",
            value: "CharacterNode",
            loc: { start: 825, end: 838 },
          },
          loc: { start: 825, end: 838 },
        },
        {
          kind: "NamedType",
          name: {
            kind: "Name",
            value: "MainCharacter",
            loc: { start: 841, end: 854 },
          },
          loc: { start: 841, end: 854 },
        },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 859, end: 861 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 863, end: 865 },
              },
              loc: { start: 863, end: 865 },
            },
            loc: { start: 863, end: 866 },
          },
          directives: [],
          loc: { start: 859, end: 866 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "mostRelatedCharacter",
            loc: { start: 869, end: 889 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "CharacterNode",
              loc: { start: 891, end: 904 },
            },
            loc: { start: 891, end: 904 },
          },
          directives: [],
          loc: { start: 869, end: 904 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "relatedCharacters",
            loc: { start: 907, end: 924 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "CharacterNode",
                    loc: { start: 927, end: 940 },
                  },
                  loc: { start: 927, end: 940 },
                },
                loc: { start: 927, end: 941 },
              },
              loc: { start: 926, end: 942 },
            },
            loc: { start: 926, end: 943 },
          },
          directives: [],
          loc: { start: 907, end: 943 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "lastAppearsIn",
            loc: { start: 946, end: 959 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Readable",
              loc: { start: 961, end: 969 },
            },
            loc: { start: 961, end: 969 },
          },
          directives: [],
          loc: { start: 946, end: 969 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "appearsIn",
            loc: { start: 972, end: 981 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Readable",
                    loc: { start: 984, end: 992 },
                  },
                  loc: { start: 984, end: 992 },
                },
                loc: { start: 984, end: 993 },
              },
              loc: { start: 983, end: 994 },
            },
            loc: { start: 983, end: 995 },
          },
          directives: [],
          loc: { start: 972, end: 995 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "screenName",
            loc: { start: 998, end: 1008 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1010, end: 1016 },
              },
              loc: { start: 1010, end: 1016 },
            },
            loc: { start: 1010, end: 1017 },
          },
          directives: [],
          loc: { start: 998, end: 1017 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "spells",
            loc: { start: 1020, end: 1026 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 1029, end: 1035 },
                  },
                  loc: { start: 1029, end: 1035 },
                },
                loc: { start: 1029, end: 1036 },
              },
              loc: { start: 1028, end: 1037 },
            },
            loc: { start: 1028, end: 1038 },
          },
          directives: [],
          loc: { start: 1020, end: 1038 },
        },
      ],
      loc: { start: 802, end: 1040 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Fighter", loc: { start: 1047, end: 1054 } },
      interfaces: [
        {
          kind: "NamedType",
          name: {
            kind: "Name",
            value: "CharacterNode",
            loc: { start: 1066, end: 1079 },
          },
          loc: { start: 1066, end: 1079 },
        },
        {
          kind: "NamedType",
          name: {
            kind: "Name",
            value: "MainCharacter",
            loc: { start: 1082, end: 1095 },
          },
          loc: { start: 1082, end: 1095 },
        },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 1100, end: 1102 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 1104, end: 1106 },
              },
              loc: { start: 1104, end: 1106 },
            },
            loc: { start: 1104, end: 1107 },
          },
          directives: [],
          loc: { start: 1100, end: 1107 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "mostRelatedCharacter",
            loc: { start: 1110, end: 1130 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "CharacterNode",
              loc: { start: 1132, end: 1145 },
            },
            loc: { start: 1132, end: 1145 },
          },
          directives: [],
          loc: { start: 1110, end: 1145 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "relatedCharacters",
            loc: { start: 1148, end: 1165 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "CharacterNode",
                    loc: { start: 1168, end: 1181 },
                  },
                  loc: { start: 1168, end: 1181 },
                },
                loc: { start: 1168, end: 1182 },
              },
              loc: { start: 1167, end: 1183 },
            },
            loc: { start: 1167, end: 1184 },
          },
          directives: [],
          loc: { start: 1148, end: 1184 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "lastAppearsIn",
            loc: { start: 1187, end: 1200 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Readable",
              loc: { start: 1202, end: 1210 },
            },
            loc: { start: 1202, end: 1210 },
          },
          directives: [],
          loc: { start: 1187, end: 1210 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "appearsIn",
            loc: { start: 1213, end: 1222 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Readable",
                    loc: { start: 1225, end: 1233 },
                  },
                  loc: { start: 1225, end: 1233 },
                },
                loc: { start: 1225, end: 1234 },
              },
              loc: { start: 1224, end: 1235 },
            },
            loc: { start: 1224, end: 1236 },
          },
          directives: [],
          loc: { start: 1213, end: 1236 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "screenName",
            loc: { start: 1239, end: 1249 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1251, end: 1257 },
              },
              loc: { start: 1251, end: 1257 },
            },
            loc: { start: 1251, end: 1258 },
          },
          directives: [],
          loc: { start: 1239, end: 1258 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "powerLevel",
            loc: { start: 1261, end: 1271 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 1273, end: 1276 },
              },
              loc: { start: 1273, end: 1276 },
            },
            loc: { start: 1273, end: 1277 },
          },
          directives: [],
          loc: { start: 1261, end: 1277 },
        },
      ],
      loc: { start: 1042, end: 1279 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ExtraCharacter",
        loc: { start: 1286, end: 1300 },
      },
      interfaces: [
        {
          kind: "NamedType",
          name: {
            kind: "Name",
            value: "CharacterNode",
            loc: { start: 1312, end: 1325 },
          },
          loc: { start: 1312, end: 1325 },
        },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 1330, end: 1332 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 1334, end: 1336 },
              },
              loc: { start: 1334, end: 1336 },
            },
            loc: { start: 1334, end: 1337 },
          },
          directives: [],
          loc: { start: 1330, end: 1337 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "mostRelatedCharacter",
            loc: { start: 1340, end: 1360 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "CharacterNode",
              loc: { start: 1362, end: 1375 },
            },
            loc: { start: 1362, end: 1375 },
          },
          directives: [],
          loc: { start: 1340, end: 1375 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "relatedCharacters",
            loc: { start: 1378, end: 1395 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "CharacterNode",
                    loc: { start: 1398, end: 1411 },
                  },
                  loc: { start: 1398, end: 1411 },
                },
                loc: { start: 1398, end: 1412 },
              },
              loc: { start: 1397, end: 1413 },
            },
            loc: { start: 1397, end: 1414 },
          },
          directives: [],
          loc: { start: 1378, end: 1414 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "lastAppearsIn",
            loc: { start: 1417, end: 1430 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Readable",
              loc: { start: 1432, end: 1440 },
            },
            loc: { start: 1432, end: 1440 },
          },
          directives: [],
          loc: { start: 1417, end: 1440 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "appearsIn",
            loc: { start: 1443, end: 1452 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Readable",
                    loc: { start: 1455, end: 1463 },
                  },
                  loc: { start: 1455, end: 1463 },
                },
                loc: { start: 1455, end: 1464 },
              },
              loc: { start: 1454, end: 1465 },
            },
            loc: { start: 1454, end: 1466 },
          },
          directives: [],
          loc: { start: 1443, end: 1466 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "creditName",
            loc: { start: 1469, end: 1479 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1481, end: 1487 },
              },
              loc: { start: 1481, end: 1487 },
            },
            loc: { start: 1481, end: 1488 },
          },
          directives: [],
          loc: { start: 1469, end: 1488 },
        },
      ],
      loc: { start: 1281, end: 1490 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 1503, end: 1508 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "job", loc: { start: 1513, end: 1516 } },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "jobId",
                loc: { start: 1517, end: 1522 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1524, end: 1526 },
                  },
                  loc: { start: 1524, end: 1526 },
                },
                loc: { start: 1524, end: 1527 },
              },
              directives: [],
              loc: { start: 1517, end: 1527 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Job",
                loc: { start: 1530, end: 1533 },
              },
              loc: { start: 1530, end: 1533 },
            },
            loc: { start: 1530, end: 1534 },
          },
          directives: [],
          loc: { start: 1513, end: 1534 },
        },
      ],
      loc: { start: 1491, end: 1536 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Job", loc: { start: 1543, end: 1546 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 1551, end: 1553 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 1555, end: 1557 },
              },
              loc: { start: 1555, end: 1557 },
            },
            loc: { start: 1555, end: 1558 },
          },
          directives: [],
          loc: { start: 1551, end: 1558 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "title",
            loc: { start: 1561, end: 1566 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1568, end: 1574 },
              },
              loc: { start: 1568, end: 1574 },
            },
            loc: { start: 1568, end: 1575 },
          },
          directives: [],
          loc: { start: 1561, end: 1575 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "location",
            loc: { start: 1578, end: 1586 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1588, end: 1594 },
              },
              loc: { start: 1588, end: 1594 },
            },
            loc: { start: 1588, end: 1595 },
          },
          directives: [],
          loc: { start: 1578, end: 1595 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "isQuickApply",
            loc: { start: 1598, end: 1610 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean",
                loc: { start: 1612, end: 1619 },
              },
              loc: { start: 1612, end: 1619 },
            },
            loc: { start: 1612, end: 1620 },
          },
          directives: [],
          loc: { start: 1598, end: 1620 },
        },
      ],
      loc: { start: 1538, end: 1622 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 1635, end: 1640 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "jobApplication",
            loc: { start: 1645, end: 1659 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "JobApplication",
              loc: { start: 1661, end: 1675 },
            },
            loc: { start: 1661, end: 1675 },
          },
          directives: [],
          loc: { start: 1645, end: 1675 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "jobApplications",
            loc: { start: 1678, end: 1693 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "JobApplication",
                    loc: { start: 1696, end: 1710 },
                  },
                  loc: { start: 1696, end: 1710 },
                },
                loc: { start: 1696, end: 1711 },
              },
              loc: { start: 1695, end: 1712 },
            },
            loc: { start: 1695, end: 1713 },
          },
          directives: [],
          loc: { start: 1678, end: 1713 },
        },
      ],
      loc: { start: 1623, end: 1715 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "JobApplication",
        loc: { start: 1722, end: 1736 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 1741, end: 1743 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1745, end: 1751 },
              },
              loc: { start: 1745, end: 1751 },
            },
            loc: { start: 1745, end: 1752 },
          },
          directives: [],
          loc: { start: 1741, end: 1752 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "job", loc: { start: 1755, end: 1758 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Job",
                loc: { start: 1760, end: 1763 },
              },
              loc: { start: 1760, end: 1763 },
            },
            loc: { start: 1760, end: 1764 },
          },
          directives: [],
          loc: { start: 1755, end: 1764 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "status",
            loc: { start: 1767, end: 1773 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1775, end: 1781 },
              },
              loc: { start: 1775, end: 1781 },
            },
            loc: { start: 1775, end: 1782 },
          },
          directives: [],
          loc: { start: 1767, end: 1782 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "appliedAt",
            loc: { start: 1785, end: 1794 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1796, end: 1802 },
              },
              loc: { start: 1796, end: 1802 },
            },
            loc: { start: 1796, end: 1803 },
          },
          directives: [],
          loc: { start: 1785, end: 1803 },
        },
      ],
      loc: { start: 1717, end: 1805 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 1818, end: 1823 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "user",
            loc: { start: 1828, end: 1832 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 1833, end: 1835 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1837, end: 1839 },
                  },
                  loc: { start: 1837, end: 1839 },
                },
                loc: { start: 1837, end: 1840 },
              },
              directives: [],
              loc: { start: 1833, end: 1840 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "User",
              loc: { start: 1843, end: 1847 },
            },
            loc: { start: 1843, end: 1847 },
          },
          directives: [],
          loc: { start: 1828, end: 1847 },
        },
      ],
      loc: { start: 1806, end: 1849 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "User", loc: { start: 1856, end: 1860 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 1865, end: 1867 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 1869, end: 1871 },
              },
              loc: { start: 1869, end: 1871 },
            },
            loc: { start: 1869, end: 1872 },
          },
          directives: [],
          loc: { start: 1865, end: 1872 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "fullName",
            loc: { start: 1875, end: 1883 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1885, end: 1891 },
              },
              loc: { start: 1885, end: 1891 },
            },
            loc: { start: 1885, end: 1892 },
          },
          directives: [],
          loc: { start: 1875, end: 1892 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "booksRead",
            loc: { start: 1895, end: 1904 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Book",
                    loc: { start: 1907, end: 1911 },
                  },
                  loc: { start: 1907, end: 1911 },
                },
                loc: { start: 1907, end: 1912 },
              },
              loc: { start: 1906, end: 1913 },
            },
            loc: { start: 1906, end: 1914 },
          },
          directives: [],
          loc: { start: 1895, end: 1914 },
        },
      ],
      loc: { start: 1851, end: 1916 },
    },
  ],
  loc: { start: 0, end: 1917 },
} as unknown as DocumentNode;
