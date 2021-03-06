// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Manages a Automation Account.
 */
export class Account extends pulumi.CustomResource {
    /**
     * Get an existing Account resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AccountState): Account {
        return new Account(name, <any>state, { id });
    }

    /**
     * The Primary Access Key for the DSC Endpoint associated with this Automation Account.
     */
    public /*out*/ readonly dscPrimaryAccessKey: pulumi.Output<string>;
    /**
     * The Secondary Access Key for the DSC Endpoint associated with this Automation Account.
     */
    public /*out*/ readonly dscSecondaryAccessKey: pulumi.Output<string>;
    /**
     * The DSC Server Endpoint associated with this Automation Account.
     */
    public /*out*/ readonly dscServerEndpoint: pulumi.Output<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    public readonly location: pulumi.Output<string>;
    /**
     * The SKU name of the account - only `Basic` is supported at this time. Defaults to `Basic`.
     */
    public readonly name: pulumi.Output<string>;
    /**
     * The name of the resource group in which the Automation Account is created. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A `sku` block as defined below.
     */
    public readonly sku: pulumi.Output<{ name?: string }>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags: pulumi.Output<{[key: string]: any}>;

    /**
     * Create a Account resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AccountArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AccountArgs | AccountState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: AccountState = argsOrState as AccountState | undefined;
            inputs["dscPrimaryAccessKey"] = state ? state.dscPrimaryAccessKey : undefined;
            inputs["dscSecondaryAccessKey"] = state ? state.dscSecondaryAccessKey : undefined;
            inputs["dscServerEndpoint"] = state ? state.dscServerEndpoint : undefined;
            inputs["location"] = state ? state.location : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["sku"] = state ? state.sku : undefined;
            inputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as AccountArgs | undefined;
            if (!args || args.location === undefined) {
                throw new Error("Missing required property 'location'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.sku === undefined) {
                throw new Error("Missing required property 'sku'");
            }
            inputs["location"] = args ? args.location : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["sku"] = args ? args.sku : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["dscPrimaryAccessKey"] = undefined /*out*/;
            inputs["dscSecondaryAccessKey"] = undefined /*out*/;
            inputs["dscServerEndpoint"] = undefined /*out*/;
        }
        super("azure:automation/account:Account", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Account resources.
 */
export interface AccountState {
    /**
     * The Primary Access Key for the DSC Endpoint associated with this Automation Account.
     */
    readonly dscPrimaryAccessKey?: pulumi.Input<string>;
    /**
     * The Secondary Access Key for the DSC Endpoint associated with this Automation Account.
     */
    readonly dscSecondaryAccessKey?: pulumi.Input<string>;
    /**
     * The DSC Server Endpoint associated with this Automation Account.
     */
    readonly dscServerEndpoint?: pulumi.Input<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The SKU name of the account - only `Basic` is supported at this time. Defaults to `Basic`.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which the Automation Account is created. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * A `sku` block as defined below.
     */
    readonly sku?: pulumi.Input<{ name?: pulumi.Input<string> }>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
}

/**
 * The set of arguments for constructing a Account resource.
 */
export interface AccountArgs {
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Input<string>;
    /**
     * The SKU name of the account - only `Basic` is supported at this time. Defaults to `Basic`.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which the Automation Account is created. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * A `sku` block as defined below.
     */
    readonly sku: pulumi.Input<{ name?: pulumi.Input<string> }>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
}
