import { is, getBusinessObject } from 'bpmn-js/lib/util/ModelUtil';

const restImageSvg = `
<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.6667 2.29163H7.33335C4.54892 2.29163 2.29169 4.54886 2.29169 7.33329V14.6666C2.29169 17.4511 4.54892 19.7083 7.33335 19.7083H14.6667C17.4511 19.7083 19.7084 17.4511 19.7084 14.6666V7.33329C19.7084 4.54886 17.4511 2.29163 14.6667 2.29163ZM7.33335 0.916626C3.78953 0.916626 0.916687 3.78947 0.916687 7.33329V14.6666C0.916687 18.2105 3.78953 21.0833 7.33335 21.0833H14.6667C18.2105 21.0833 21.0834 18.2105 21.0834 14.6666V7.33329C21.0834 3.78947 18.2105 0.916626 14.6667 0.916626H7.33335Z" fill="black"/>
  <path d="M7.59272 6.19663V7.3058C7.3877 7.3058 7.21124 7.32429 7.06335 7.36126C6.91882 7.39487 6.80959 7.45873 6.73564 7.55284C6.66506 7.64359 6.63817 7.77468 6.65497 7.94609L6.81127 9.43338C6.8516 9.80983 6.80959 10.114 6.68523 10.3459C6.56422 10.5778 6.37768 10.756 6.1256 10.8803C5.87688 11.0013 5.58278 11.0871 5.24331 11.1375C5.60295 11.1912 5.90713 11.2786 6.15585 11.3996C6.40457 11.5206 6.58607 11.6954 6.70035 11.924C6.81463 12.1525 6.8516 12.4584 6.81127 12.8416L6.65497 14.3288C6.63817 14.4969 6.66506 14.628 6.73564 14.7221C6.80959 14.8162 6.9205 14.8801 7.06839 14.9137C7.21628 14.9506 7.39106 14.9691 7.59272 14.9691V16.0783C7.12889 16.0783 6.73564 16.0447 6.41297 15.9775C6.09031 15.9102 5.8315 15.8027 5.63656 15.6548C5.44497 15.5103 5.31221 15.3187 5.23827 15.0801C5.16768 14.8448 5.1492 14.5574 5.18281 14.2179L5.33406 12.776C5.36095 12.5206 5.31725 12.3206 5.20298 12.1761C5.09206 12.0315 4.92736 11.9307 4.70889 11.8736C4.49042 11.8131 4.23834 11.7828 3.95264 11.7828V10.4921C4.23498 10.4921 4.48538 10.4636 4.70385 10.4064C4.92232 10.3459 5.0887 10.2434 5.20298 10.0989C5.31725 9.95436 5.36095 9.75437 5.33406 9.49893L5.18281 8.06709C5.14584 7.7209 5.16264 7.42848 5.23323 7.18984C5.30717 6.9512 5.43993 6.75962 5.63152 6.61509C5.82646 6.4672 6.08527 6.36133 6.40793 6.29747C6.73396 6.23025 7.12889 6.19663 7.59272 6.19663Z" fill="black"/>
  <path d="M8.73324 14.6666V13.5978H9.43908V10.3711H8.73324V9.31238H10.6541L10.9465 10.5173C11.1381 10.0569 11.3818 9.71404 11.6776 9.48884C11.9767 9.26365 12.3414 9.15105 12.7716 9.15105C12.9531 9.15105 13.1145 9.16618 13.2556 9.19643C13.3968 9.22332 13.5295 9.26197 13.6539 9.31238L13.1699 10.6283C13.0724 10.6014 12.975 10.5812 12.8775 10.5678C12.78 10.5543 12.6725 10.5476 12.5548 10.5476C12.2053 10.5476 11.8977 10.6904 11.6322 10.9761C11.37 11.2618 11.1701 11.6248 11.0322 12.0651V13.5978H12.091V14.6666H8.73324ZM12.3582 11.5509V9.98797L12.5952 9.31238H13.6539L13.3565 11.5509H12.3582Z" fill="black"/>
  <path d="M14.4113 6.19663C14.8751 6.19663 15.2683 6.23025 15.591 6.29747C15.9137 6.36469 16.1708 6.47225 16.3624 6.62013C16.5573 6.76466 16.6918 6.95625 16.7657 7.19488C16.8397 7.43016 16.8582 7.71754 16.8212 8.05701L16.6699 9.49893C16.643 9.75437 16.6867 9.95436 16.801 10.0989C16.9153 10.2434 17.08 10.3459 17.2951 10.4064C17.5136 10.4636 17.7657 10.4921 18.0513 10.4921V11.7828C17.769 11.7828 17.5186 11.8131 17.3001 11.8736C17.0817 11.9307 16.9153 12.0315 16.801 12.1761C16.6867 12.3206 16.643 12.5206 16.6699 12.776L16.8212 14.2078C16.8582 14.554 16.8397 14.8465 16.7657 15.0851C16.6951 15.3237 16.5624 15.5153 16.3674 15.6598C16.1758 15.8077 15.917 15.9136 15.591 15.9775C15.2683 16.0447 14.8751 16.0783 14.4113 16.0783V14.9691C14.6163 14.9691 14.7911 14.9506 14.9356 14.9137C15.0835 14.8801 15.1927 14.8162 15.2633 14.7221C15.3372 14.628 15.3658 14.4969 15.349 14.3288L15.1927 12.8416C15.1524 12.4617 15.1927 12.1576 15.3137 11.929C15.4381 11.6971 15.6263 11.5206 15.8784 11.3996C16.1305 11.2753 16.4262 11.1879 16.7657 11.1375C16.4061 11.0837 16.1002 10.9963 15.8481 10.8753C15.5994 10.7543 15.4179 10.5795 15.3036 10.351C15.1894 10.1191 15.1524 9.81319 15.1927 9.43338L15.349 7.94609C15.3658 7.77468 15.3372 7.64359 15.2633 7.55284C15.1927 7.45873 15.0835 7.39487 14.9356 7.36126C14.7911 7.32429 14.6163 7.3058 14.4113 7.3058V6.19663Z" fill="black"/>
</svg>

`;

const restImageUrl = 'data:image/svg+xml;utf8,' + encodeURIComponent(restImageSvg);

export default function ConnectorsExtension(injector, create, elementFactory, bpmnFactory, contextPad, palette, translate) {
  this._create = create;
  this._elementFactory = elementFactory;
  this._bpmnFactory = bpmnFactory;
  this._contextPad = contextPad;
  this._translate = translate;

  this._autoPlace = injector.get('autoPlace', false);

  contextPad.registerProvider(this);
  palette.registerProvider(this);
}

ConnectorsExtension.$inject = ['injector', 'create', 'elementFactory', 'bpmnFactory', 'contextPad', 'palette', 'translate'];

ConnectorsExtension.prototype._createElement = function() {

  const elementFactory = this._elementFactory;
  const bpmnFactory = this._bpmnFactory;

  const element = elementFactory.createShape({ type: 'bpmn:ServiceTask' });

  /**
   * On creation, scaffold the following moddle (XML representation):
   *
   * <bpmn:serviceTask zeebe:modelerTemplate="io.camunda.connectors.RestConnector-s1">
   *  <bpmn:extensionElements>
   *    <zeebe:taskDefinition type="http" />
   *    <zeebe:taskHeaders>
   *      <zeebe:header key="method" value="get" />
   *      <zeebe:header key="url" value="" />
   *     </zeebe:taskHeaders>
   *     <zeebe:ioMapping>
   *       <zeebe:input source="" target="body" />
   *       <zeebe:output source="= body" target="" />
   *     </zeebe:ioMapping>
   *   </bpmn:extensionElements>
   * </bpmn:serviceTask>
   */

  const businessObject = getBusinessObject(element);

  const taskDefinition = bpmnFactory.create('zeebe:TaskDefinition', {
    type: 'http'
  });

  const taskHeaders = bpmnFactory.create('zeebe:TaskHeaders', {
    values: [
      bpmnFactory.create('zeebe:Header', {
        key: 'method',
        value: 'get'
      }),
      bpmnFactory.create('zeebe:Header', {
        key: 'url',
        value: ''
      })
    ]
  });

  const ioMapping = bpmnFactory.create('zeebe:IoMapping', {
    inputParameters: [
      bpmnFactory.create('zeebe:Input', {
        source: '',
        target: 'body'
      })
    ],
    outputParameters: [
      bpmnFactory.create('zeebe:Output', {
        source: '= body',
        target: ''
      })
    ]
  });

  const extensionElements = bpmnFactory.create('bpmn:ExtensionElements', {
    values: [
      taskDefinition,
      taskHeaders,
      ioMapping
    ]
  });

  businessObject.set('extensionElements', extensionElements);

  businessObject.set('zeebe:modelerTemplate', 'io.camunda.connectors.RestConnector-s1');

  return element;
};


ConnectorsExtension.prototype.getPaletteEntries = function(element) {

  const title = this._translate('Create REST Connector');

  const self = this;

  function createListener(event) {
    self._create.start(event, self._createElement());
  }

  return {
    'create-rest-connector': {
      group: 'activity',
      imageUrl: restImageUrl,
      title,
      action: {
        dragstart: createListener,
        click: createListener
      }
    }
  };
};

ConnectorsExtension.prototype.getContextPadEntries = function(element) {
  const title = this._translate('Append REST Task');

  // only allow on non event sub-process activities
  if (!is(element, 'bpmn:Activity') || getBusinessObject(element).triggeredByEvent) {
    return {};
  }

  var self = this;

  function appendStart(event, shape) {
    self._create.start(event, self._createElement(), {
      source: shape
    });
  }

  var append = self._autoPlace
    ? function(event, shape) {
      self._autoPlace.append(shape, self._createElement());
    }
    : appendStart;

  return {
    'append-rest-task': {
      group: 'model',
      title,
      imageUrl: restImageUrl,
      action: {
        dragstart: appendStart,
        click: append
      }
    }
  };
};