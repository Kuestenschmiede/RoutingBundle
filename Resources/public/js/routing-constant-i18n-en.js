// "namespace"

'use strict';

/**
 *  constants
 */
export  var routingConstantsEnglish = {
  POPUP_ROUTE_FROM: 'Route from here',
  POPUP_ROUTE_TO: 'Route to here',

  ROUTER_VIEW_ADDRESS_INPUT: 'Find route',
  ROUTER_FROM_LABEL: 'Start',
  ROUTER_TO_LABEL: 'End',
  ROUTER_CLEAR_TITLE: 'Delete',
  ROUTER_CLEAR_HTML: '',
  ROUTER_Label_Interim: 'Interim Goals',

  ROUTER_SWITCH:'Switch between Start and End',
  ROUTER_OVER:'Add interim goal',
  ROUTER_PRINT:'Print route description',


  ROUTER_VIEW_LABEL_ROUTE: 'Route:',
  ROUTER_VIEW_LABEL_DISTANCE: 'Distance:',
  ROUTER_VIEW_LABEL_TIME: 'Time:',
  ROUTER_VIEW_LABEL_PROFILE:'Profile',

  ROUTER_VIEW_ALERT_ADDRESS: 'Address not found.',
  ROUTER_VIEW_ALERT_GOCODING: 'No access to geocoding.',

  ROUTER: 'Router',
  ROUTER_N: 'Head north',
  ROUTER_E: 'Head east',
  ROUTER_S: 'Head south',
  ROUTER_W: 'Head west',
  ROUTER_NE: 'Head northeast',
  ROUTER_SE: 'Head southeast',
  ROUTER_SW: 'Head southwest',
  ROUTER_NW: 'Head northwest',
  ROUTER_DIRECTION_0: 'unknown direction[ onto <b>%s</b>]',
  ROUTER_DIRECTION_1: 'straight ahead[ onto <b>%s</b>]',
  ROUTER_DIRECTION_2: 'slight right[ onto <b>%s</b>]',
  ROUTER_DIRECTION_3: 'right[ onto <b>%s</b>]',
  ROUTER_DIRECTION_4: 'sharp right[ onto <b>%s</b>]',
  ROUTER_DIRECTION_5: 'turn[ onto <b>%s</b>]',
  ROUTER_DIRECTION_6: 'sharp turn left[ onto <b>%s</b>]',
  ROUTER_DIRECTION_7: 'turn left[ onto <b>%s</b>]',
  ROUTER_DIRECTION_8: 'light turn left[ onto <b>%s</b>]',
  ROUTER_DIRECTION_10: 'drive in direction of <b>%d</b>[ onto <b>%s</b>]',
  'ROUTER_DIRECTION_11-1': 'Take the first exit in the roundabout[ onto <b>%s</b>]',
  'ROUTER_DIRECTION_11-2': 'Take the 2nd exit in the roundabout[ onto <b>%s</b>]',
  'ROUTER_DIRECTION_11-3': 'Take the 3rd exit in the roundabout[ onto <b>%s</b>]',
  'ROUTER_DIRECTION_11-4': 'Take the 4th exit in the roundabout[ onto <b>%s</b>]',
  'ROUTER_DIRECTION_11-5': 'Take the 5th exit in the roundabout[ onto <b>%s</b>]',
  'ROUTER_DIRECTION_11-6': 'Take the 6th exit in the roundabout[ onto <b>%s</b>]',
  'ROUTER_DIRECTION_11-7': 'Take the 7th exit in the roundabout[ onto <b>%s</b>]',
  'ROUTER_DIRECTION_11-8': 'Take the 8th exit in the roundabout[ onto <b>%s</b>]',
  'ROUTER_DIRECTION_11-9': 'Take the 9th exit in the roundabout[ onto <b>%s</b>]',
  'ROUTER_DIRECTION_11-x': 'Take one of the exits in the roundabout[ onto <b>%s</b>]',
  ROUTER_DIRECTION_15: 'Destination reached',

  'ROUTER_5.X_TYPE_0': ' Turn %m on[ <b>%s</b>]',
  'ROUTER_5.X_TYPE_1': ' Follow the course of the road %m[ as <b>%s</b>]',
  'ROUTER_5.X_TYPE_2': ' Depart[ on <b>%s</b>]',
  'ROUTER_5.X_TYPE_3': ' Arrive <b>%m</b>',
  'ROUTER_5.X_TYPE_4': ' Continue driving[ on <b>%s</b>]',
  'ROUTER_5.X_TYPE_5': ' Take the ramp %m[ on <b>%s</b>]',
  'ROUTER_5.X_TYPE_6': ' Take the ramp %m[ to exit on<b>%s</b>]',
  'ROUTER_5.X_TYPE_7': ' Take the %m site of the fork to[ <b>%s</b>]',
  'ROUTER_5.X_TYPE_8': ' Turn %m[ on <b>%s</b>]',
  'ROUTER_5.X_TYPE_9': ' Take the lane %m[ on <b>%s</b>]',
  'ROUTER_5.X_TYPE_10': ' Turn %m to stay on the road',
  'ROUTER_5.X_TYPE_11': ' Leave the roundabout on the %z. exit[ to <b>%s</b>]',
  'ROUTER_5.X_TYPE_12': ' Leave the roundabout on the %z. exit[ to <b>%s</b>]',
  'ROUTER_5.X_TYPE_13': ' Turn %m[ on <b>%s</b>]',
  'ROUTER_5.X_TYPE_14': ' Follow the road %m',

  'ROUTER_5.X_MOD_0'  : 'Uturn',
  'ROUTER_5.X_MOD_1'  : 'sharp right',
  'ROUTER_5.X_MOD_2'  : 'right',
  'ROUTER_5.X_MOD_3'  : 'slight right',
  'ROUTER_5.X_MOD_4'  : 'straight',
  'ROUTER_5.X_MOD_5'  : 'slight left',
  'ROUTER_5.X_MOD_6'  : 'left',
  'ROUTER_5.X_MOD_7'  : 'sharp left',
  'ROUTER_5.X_MOD_8'  : 'somehow',

  ROUTER_FROM: 'Start',
  ROUTER_TO: 'End',
  ROUTER_FIND_ROUTE: 'Find route',
  ROUTER_LOC_ROUTE_TO: 'Route to here',
  ROUTER_ROUTEDESC: 'Description',
  ROUTER_ROUTENAME: 'Route',
  ROUTER_DISTANCE: 'Distance',
  ROUTER_TIME: 'Time',
  ROUTER_REV_GEOCODING: 'Identified address...',
  ROUTER_ERROR_REV_GEOCODING: 'Fault! Can not identifiy address',
  ROUTER_SEARCHING: 'Search address...',
  ROUTER_ERROR_SEARCHING: 'Fault! Can not find address',
  ROUTER_CALC_ROUTE: 'Calc route...',
  ROUTER_ERROR_CALC_ROUTE: 'Fault! Can not calc address',

  //new Router
  AREA_NAME:            'Search perimeter',
  ROUTE_DETOUR:         'Detour',
  AREA_DETOUR:          'Radius',
  INSTRUCTION_HEADLINE: 'Route Instructions',
  FEATURES_HEADLINE:    'Locations',
  ROUTE_POSITION:       'Get user position',
  START_ROUTE:          'Start search',



  NONE: '' // last line
}; // end of "css constants" ---
