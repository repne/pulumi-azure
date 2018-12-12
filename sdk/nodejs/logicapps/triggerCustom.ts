// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Manages a Custom Trigger within a Logic App Workflow
 */
export class TriggerCustom extends pulumi.CustomResource {
    /**
     * Get an existing TriggerCustom resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TriggerCustomState, opts?: pulumi.CustomResourceOptions): TriggerCustom {
        return new TriggerCustom(name, <any>state, { ...opts, id: id });
    }

    /**
     * Specifies the JSON Blob defining the Body of this Custom Trigger.
     */
    public readonly body: pulumi.Output<string>;
    /**
     * Specifies the ID of the Logic App Workflow. Changing this forces a new resource to be created.
     */
    public readonly logicAppId: pulumi.Output<string>;
    /**
     * Specifies the name of the HTTP Trigger to be created within the Logic App Workflow. Changing this forces a new resource to be created.
     */
    public readonly name: pulumi.Output<string>;

    /**
     * Create a TriggerCustom resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TriggerCustomArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: TriggerCustomArgs | TriggerCustomState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: TriggerCustomState = argsOrState as TriggerCustomState | undefined;
            inputs["body"] = state ? state.body : undefined;
            inputs["logicAppId"] = state ? state.logicAppId : undefined;
            inputs["name"] = state ? state.name : undefined;
        } else {
            const args = argsOrState as TriggerCustomArgs | undefined;
            if (!args || args.body === undefined) {
                throw new Error("Missing required property 'body'");
            }
            if (!args || args.logicAppId === undefined) {
                throw new Error("Missing required property 'logicAppId'");
            }
            inputs["body"] = args ? args.body : undefined;
            inputs["logicAppId"] = args ? args.logicAppId : undefined;
            inputs["name"] = args ? args.name : undefined;
        }
        super("azure:logicapps/triggerCustom:TriggerCustom", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering TriggerCustom resources.
 */
export interface TriggerCustomState {
    /**
     * Specifies the JSON Blob defining the Body of this Custom Trigger.
     */
    readonly body?: pulumi.Input<string>;
    /**
     * Specifies the ID of the Logic App Workflow. Changing this forces a new resource to be created.
     */
    readonly logicAppId?: pulumi.Input<string>;
    /**
     * Specifies the name of the HTTP Trigger to be created within the Logic App Workflow. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a TriggerCustom resource.
 */
export interface TriggerCustomArgs {
    /**
     * Specifies the JSON Blob defining the Body of this Custom Trigger.
     */
    readonly body: pulumi.Input<string>;
    /**
     * Specifies the ID of the Logic App Workflow. Changing this forces a new resource to be created.
     */
    readonly logicAppId: pulumi.Input<string>;
    /**
     * Specifies the name of the HTTP Trigger to be created within the Logic App Workflow. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
}
