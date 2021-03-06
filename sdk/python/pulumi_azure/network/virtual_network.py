# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime
from .. import utilities, tables

class VirtualNetwork(pulumi.CustomResource):
    """
    Manages a virtual network including any configured subnets. Each subnet can
    optionally be configured with a security group to be associated with the subnet.
    
    ~> **NOTE on Virtual Networks and Subnet's:** Terraform currently
    provides both a standalone Subnet resource, and allows for Subnets to be defined in-line within the Virtual Network resource.
    At this time you cannot use a Virtual Network with in-line Subnets in conjunction with any Subnet resources. Doing so will cause a conflict of Subnet configurations and will overwrite Subnet's.
    """
    def __init__(__self__, __name__, __opts__=None, address_spaces=None, dns_servers=None, location=None, name=None, resource_group_name=None, subnets=None, tags=None):
        """Create a VirtualNetwork resource with the given unique name, props, and options."""
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, str):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        if not address_spaces:
            raise TypeError('Missing required property address_spaces')
        __props__['address_spaces'] = address_spaces

        __props__['dns_servers'] = dns_servers

        if not location:
            raise TypeError('Missing required property location')
        __props__['location'] = location

        __props__['name'] = name

        if not resource_group_name:
            raise TypeError('Missing required property resource_group_name')
        __props__['resource_group_name'] = resource_group_name

        __props__['subnets'] = subnets

        __props__['tags'] = tags

        super(VirtualNetwork, __self__).__init__(
            'azure:network/virtualNetwork:VirtualNetwork',
            __name__,
            __props__,
            __opts__)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

