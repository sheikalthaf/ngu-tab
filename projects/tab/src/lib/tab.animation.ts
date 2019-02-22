import {
  animate,
  state,
  style,
  transition,
  trigger,
  AnimationTriggerMetadata
} from '@angular/animations';

export const EXPANSION_PANEL_ANIMATION_TIMING =
  '225ms cubic-bezier(0.4,0.0,0.2,1)';

// export const bodyTabs = trigger('bodyTabs', [
//   transition('* => *', [
//     query(
//       ':enter, :leave',
//       style({ opacity: 1, position: 'absolute', width: '100%' }),
//       { optional: true }
//     ),
//     state(':enter', style({ opacity: 1 })),
//     state(':leave', style({ opacity: 0 })),
//     transition('* <=> *', animate(EXPANSION_PANEL_ANIMATION_TIMING))
//   ])
// ]);

// export const bodyTabs1 = trigger('bodyTabs1', [
//   state(':enter', style({ opacity: 1, visibility: 'visible' })),
//   state(':leave', style({ opacity: 0, visibility: 'hidden' })),
//   transition('* <=> *', animate(EXPANSION_PANEL_ANIMATION_TIMING))
// ]);

// export const bodyTabs2 = trigger('bodyTabs2', [
//   transition('* => *', [
//     query(':enter, :leave', style({ position: 'absolute', width: '100%' }), {
//       optional: true
//     }),
//     query(':enter', style({ opacity: 0 }), {
//       optional: true
//     }),
//     sequence([
//       group([
//         query(
//           ':leave',
//           [style({ opacity: 1 }), animate('500ms ease', style({ opacity: 0 }))],
//           { optional: true }
//         ),
//         query(
//           ':enter',
//           [style({ opacity: 0 }), animate('500ms ease', style({ opacity: 1 }))],
//           { optional: true }
//         )
//       ])
//     ])
//   ])
// ]);

// export const bodyTabs = trigger('bodyTabs', [
//   transition('* => *', [
//     query(
//       ':enter, :leave',
//       style({ opacity: 1, position: 'absolute', top: 0, left: 0 })
//     ),
//     group([
//       query(':leave', [
//         style({ opacity: 1 }),
//         animate('0.5s', style({ opacity: 0 }))
//       ]),

//       query(':enter', [
//         style({ opacity: 0 }),
//         animate('0.5s', style({ opacity: 1 }))
//       ])
//     ])
//   ])
// ]);

export const bodyTabs: AnimationTriggerMetadata = trigger('bodyTabs', [
  state(
    ':enter, :leave',
    style({ opacity: 1, position: 'absolute', top: 0, width: '100%' })
  ),
  state(':enter', style({ opacity: 0 })),
  transition(':enter', [
    style({ opacity: 1 }),
    animate('500ms cubic-bezier(0.35, 0, 0.25, 1)')
  ]),
  transition(':leave', [
    style({ opacity: 0 }),
    animate('500ms cubic-bezier(0.35, 0, 0.25, 1)')
  ])
]);
