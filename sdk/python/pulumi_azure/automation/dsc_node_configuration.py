# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime
from .. import utilities, tables

class DscNodeConfiguration(pulumi.CustomResource):
    """
    Manages a Automation DSC Node Configuration.
    """
    def __init__(__self__, __name__, __opts__=None, automation_account_name=None, content_embedded=None, name=None, resource_group_name=None):
        """Create a DscNodeConfiguration resource with the given unique name, props, and options."""
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, str):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        if not automation_account_name:
            raise TypeError('Missing required property automation_account_name')
        __props__['automation_account_name'] = automation_account_name

        if not content_embedded:
            raise TypeError('Missing required property content_embedded')
        __props__['content_embedded'] = content_embedded

        __props__['name'] = name

        if not resource_group_name:
            raise TypeError('Missing required property resource_group_name')
        __props__['resource_group_name'] = resource_group_name

        __props__['configuration_name'] = None

        super(DscNodeConfiguration, __self__).__init__(
            'azure:automation/dscNodeConfiguration:DscNodeConfiguration',
            __name__,
            __props__,
            __opts__)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

