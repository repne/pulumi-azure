# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime
from .. import utilities, tables

class ConsumerGroup(pulumi.CustomResource):
    """
    Manages a Consumer Group within an IotHub
    """
    def __init__(__self__, __name__, __opts__=None, eventhub_endpoint_name=None, iothub_name=None, name=None, resource_group_name=None):
        """Create a ConsumerGroup resource with the given unique name, props, and options."""
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, str):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        if not eventhub_endpoint_name:
            raise TypeError('Missing required property eventhub_endpoint_name')
        __props__['eventhub_endpoint_name'] = eventhub_endpoint_name

        if not iothub_name:
            raise TypeError('Missing required property iothub_name')
        __props__['iothub_name'] = iothub_name

        __props__['name'] = name

        if not resource_group_name:
            raise TypeError('Missing required property resource_group_name')
        __props__['resource_group_name'] = resource_group_name

        super(ConsumerGroup, __self__).__init__(
            'azure:iot/consumerGroup:ConsumerGroup',
            __name__,
            __props__,
            __opts__)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

